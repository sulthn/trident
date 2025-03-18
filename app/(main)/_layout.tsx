import { Stack } from "expo-router";

import * as NavigationBar from "expo-navigation-bar";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Layout() {
  NavigationBar.setBackgroundColorAsync(useThemeColor({}, "background"));

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
