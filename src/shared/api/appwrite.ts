import { Account, Client, Databases } from 'react-native-appwrite'
import 'react-native-url-polyfill/auto'

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT as string,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as string,
  bundleId: 'com.dim.wishes.app',
}

const client = new Client()

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.bundleId)

export const account = new Account(client)
export const databases = new Databases(client)
