// app/_layout.tsx
import { Stack, useRouter, useSegments, SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '@/src/processes';

// Предотвращаем авто-скрытие сплеш-скрина
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const segments = useSegments();
  const firstSegment = segments[0] as string | undefined;
  const router = useRouter();
  const status = useAuthStore((state) => state.status);
  const isInitialized = useAuthStore((state) => state.isInitialized);
  const bootstrap = useAuthStore((state) => state.bootstrap);
  const bootstrapCalled = useRef(false);

  // Запускаем bootstrap только один раз
  useEffect(() => {
    if (!bootstrapCalled.current) {
      bootstrapCalled.current = true;
      bootstrap();
    }
  }, []);

  // Управление навигацией на основе статуса
  useEffect(() => {
    // Ждем инициализации
    if (!isInitialized) return;

    const isWelcomeRoute =
      firstSegment === undefined ||
      firstSegment === 'index' ||
      firstSegment === 'welcome';
    const isAuthRoute = firstSegment === 'login' || firstSegment === 'signup';
    const isPublicRoute = isWelcomeRoute || isAuthRoute;
    const isPrivateRoute = firstSegment === '(tabs)';

    // Явная схема:
    // 1) unauthenticated -> только public маршруты
    // 2) authenticated -> только private маршруты (tabs)
    if (status === 'unauthenticated') {
      if (!isPublicRoute) {
        router.replace('/welcome');
      }
      return;
    }

    if (status === 'authenticated') {
      if (!isPrivateRoute) {
        router.replace('/(tabs)');
      }
    }
  }, [status, firstSegment, router, isInitialized]);

  // Скрываем сплеш-скрин после инициализации
  useEffect(() => {
    if (isInitialized) {
      SplashScreen.hideAsync();
    }
  }, [isInitialized]);

  // Показываем оверлей загрузки, пока идет проверка
  const showBootstrapOverlay = !isInitialized || status === 'idle' || status === 'checking';

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      
      {showBootstrapOverlay && (
        <View style={styles.bootstrapOverlay} pointerEvents="auto">
          <Text style={styles.bootstrapText}>Загрузка</Text>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bootstrapOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A0A0A',
  },
  bootstrapText: {
    color: '#FBFBFB',
    marginBottom: 12,
    fontSize: 16,
  },
});