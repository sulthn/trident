import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "prefix"
    | "tooltip";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "prefix" ? styles.prefix : undefined,
        type === "tooltip" ? styles.tooltip : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Spline Sans",
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontFamily: "Spline Sans-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontFamily: "Spline Sans-Bold",
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: "Spline Sans-Bold",
    fontSize: 20,
  },
  link: {
    fontFamily: "Spline Sans",
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  prefix: {
    fontFamily: "Spline Sans-Light",
    fontSize: 20,
  },
  tooltip: {
    fontFamily: "Spline Sans-Light",
    fontSize: 16,
  },
});
