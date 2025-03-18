import { TRIDENTLogo } from "@/components/Logo";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";

export default function Login() {
  //const router = useRouter();

  const [bc, setbc] = useState("#ffffff00");

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TRIDENTLogo />
        <ThemedText type="subtitle">Login</ThemedText>
      </View>
      <Pressable
        onPressIn={() => {
          setbc("#ffffff");
        }}
        onPressOut={() => {
          setbc("#ffffff00");
        }}
        onLongPress={() => {
          router.replace("/(main)");
        }}
        style={{ flex: 1 }}
      >
        <MaterialIcons
          style={{
            borderRadius: 25,
            fontWeight: "light",
            backgroundColor: bc,
          }}
          name="fingerprint"
          size={60}
          color={useThemeColor({}, "icon")}
        />
      </Pressable>
    </ThemedView>
  );
}
