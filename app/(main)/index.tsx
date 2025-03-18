import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { StatusBar, View } from "react-native";

export default function Login() {
  return (
    <ThemedView
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#0000002f",
        }}
      >
        <ThemedText type="prefix" style={{ paddingBottom: 5 }}>
          Welcome,{" "}
        </ThemedText>
        <ThemedText type="title">Hunter Biden👋</ThemedText>

        <ThemedText
          type="tooltip"
          darkColor="#aaaaaa"
          style={{ paddingTop: 20 }}
        >
          - Aquaman (Trident AI Assistant)
        </ThemedText>
      </View>
    </ThemedView>
  );
}
