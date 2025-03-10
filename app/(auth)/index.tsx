import { TRIDENTLogo } from "@/components/Logo";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <TRIDENTLogo />
    </ThemedView>
  );
}

