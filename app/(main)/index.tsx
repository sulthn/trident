import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  ServerWidgetContainter,
  ServerWidget,
  addWidgetEntry,
  resetWidgetEntry,
} from "@/components/Servers";

import { Button, StatusBar, View } from "react-native";

export default function Dashboard() {
  function addanentry() {
    const ex_widget: ServerWidget = {
      id: 0,
      serverName: "hello",
      graph: false,
    };

    addWidgetEntry([ex_widget]);
  }

  function reset() {
    resetWidgetEntry();
  }

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
          height: "15%",
        }}
      >
        <View style={{ flex: 5 }}>
          <ThemedText type="prefix" style={{ paddingBottom: 5 }}>
            Welcome,
          </ThemedText>
          <ThemedText type="title">Hunter Biden👋</ThemedText>
        </View>

        <ThemedText type="tooltip" darkColor="#aaaaaa" style={{ flex: 1 }}>
          - Aquaman (Trident AI Assistant)
        </ThemedText>
      </View>

      <ServerWidgetContainter />

      <Button onPress={addanentry} title="add an entry"></Button>
      <Button onPress={reset} title="reset"></Button>
    </ThemedView>
  );
}
