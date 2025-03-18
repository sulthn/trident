import { View } from "react-native";
import { useState, useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { Children } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const addWidgetEntry = async (widgets: ServerWidget[]) => {
  const entry = await getData("@widget_key");

  if (entry.widget_idx + widgets.length > 4) {
    return;
  }

  entry.widget_idx = entry.widget_idx + widgets.length;
  entry.widgets = entry.widgets.concat(widgets);
  storeData("@widget_key", entry);
};

export const resetWidgetEntry = async () => {
  storeData("@widget_key", { widget_idx: 0, widgets: [] });
};

export interface ServerWidget {
  id: number;
  serverName: string;
  graph: boolean;
}

interface ServerWidgetStore {
  widget_idx: number;
  widgets: ServerWidget[];
}

export function ServerWidgetContainter() {
  const [widgets, setWidgets] = useState();

  useEffect(() => {
    (async () => {
      const entries = await getData("@widget_key");
      setWidgets(entries);
    })();
  }, [widgets]);

  return <View></View>;
}

export type ServerWidgetProps = {
  name: string;
};

function ServerWidgetElement({ name }: ServerWidgetProps) {
  return (
    <View style={{ backgroundColor: "#0000002f" }}>
      <ThemedText>{name}</ThemedText>
    </View>
  );
}
