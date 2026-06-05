import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAppFonts } from '@/styles/theme';

export default function RootLayout() {
  const [loaded, error] = useAppFonts();

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="dark" />
      <Stack 
        screenOptions={{
          animation: 'slide_from_right', 
          headerShown: false 
        }} 
      />
    </>
  );
}