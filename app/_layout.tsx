import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        'Spline Sans': require('../assets/fonts/SplineSans/SplineSans-Regular.ttf'),
        'Spline Sans-Light': require('../assets/fonts/SplineSans/SplineSans-Light.ttf'),
        'Spline Sans-Bold': require('../assets/fonts/SplineSans/SplineSans-Bold.ttf'),
        'Spline Sans-SemiBold': require('../assets/fonts/SplineSans/SplineSans-SemiBold.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    
    if (!loaded) {
        return null;
    }
    
    return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
    </ThemeProvider>
    );
}
