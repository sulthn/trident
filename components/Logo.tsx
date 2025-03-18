import { Image, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function TRIDENTLogo() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/trident_transparent.png")}
        style={{ alignSelf: "center", width: 80, height: 80 }}
      />
      <ThemedText
        type="title"
        style={{
          fontSize: 60,
          lineHeight: 60 * 1.5,
          includeFontPadding: false,
          textAlignVertical: "center",
        }}
      >
        TRIDENT
      </ThemedText>
    </View>
  );
}
