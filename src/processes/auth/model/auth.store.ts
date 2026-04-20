// src/processes/auth/model/auth.store.ts
import { create } from 'zustand'
import { account } from '@/src/shared/api/appwrite'

const FORCE_AUTH_FOR_DEMO = false
let isDemoLoggedOut = false

type TCredentials = {
  email: string
  password: string
}

export type TAuthStatus =
  | 'idle'
  | 'checking'
  | 'authenticated'
  | 'unauthenticated'

export type TAuthUser = {
  $id: string
  email: string
  name: string
}

type TAuthState = {
  status: TAuthStatus
  user: TAuthUser | null
  error: string | null
  isInitialized: boolean

  bootstrap: () => Promise<void>
  login: ({ email, password }: TCredentials) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<TAuthState>((set, get) => ({
  status: 'idle',
  user: null,
  error: null,
  isInitialized: false,

  bootstrap: async () => {
    // Защита от повторного вызова
    if (get().status === 'checking' || get().isInitialized) {
      return
    }

    set({ status: 'checking', error: null })

    // Демо-режим
    if (FORCE_AUTH_FOR_DEMO) {
      if (isDemoLoggedOut) {
        set({
          status: 'unauthenticated',
          user: null,
          error: null,
          isInitialized: true,
        })
        return
      }

      set({
        status: 'authenticated',
        user: {
          $id: 'demo-user',
          email: 'demo@example.com',
          name: 'Demo User',
        },
        error: null,
        isInitialized: true,
      })
      return
    }

    // Реальная проверка
    try {
      const me = await account.get()
      set({
        status: 'authenticated',
        user: {
          $id: me.$id,
          email: me.email,
          name: me.name,
        },
        error: null,
        isInitialized: true,
      })
    } catch {
      set({
        status: 'unauthenticated',
        user: null,
        error: null,
        isInitialized: true,
      })
    }
  },

  login: async ({ email, password }) => {
    set({ status: 'checking', error: null })

    try {
      if (FORCE_AUTH_FOR_DEMO) {
        isDemoLoggedOut = false
        set({
          status: 'authenticated',
          user: {
            $id: 'demo-user',
            email: email,
            name: email.split('@')[0],
          },
          error: null,
          isInitialized: true,
        })
        return
      }

      await account.createEmailPasswordSession({ email, password })
      const me = await account.get()

      set({
        status: 'authenticated',
        user: {
          $id: me.$id,
          email: me.email,
          name: me.name,
        },
        error: null,
        isInitialized: true,
      })
    } catch (error: any) {
      set({
        status: 'unauthenticated',
        user: null,
        error: error?.message ?? 'Login failed',
        isInitialized: true,
      })
      throw error
    }
  },

  logout: async () => {
    set({ status: 'checking' })

    try {
      if (FORCE_AUTH_FOR_DEMO) {
        isDemoLoggedOut = true
        set({
          status: 'unauthenticated',
          user: null,
          error: null,
          isInitialized: true,
        })
        return
      }

      await account.deleteSession('current')
      set({
        status: 'unauthenticated',
        user: null,
        error: null,
        isInitialized: true,
      })
    } catch (error) {
      console.error('Logout error:', error)
      set({
        status: 'unauthenticated',
        user: null,
        error: null,
        isInitialized: true,
      })
    }
  },

  clearError: () => {
    set({ error: null })
  },
}))
