import { StyleProp, TextInput, TextInputProps, TextStyle, StyleSheet, View, Text, ViewStyle } from "react-native";
import React, { forwardRef, memo, useEffect, useRef, useState } from "react";

export interface AppInputProps extends TextInputProps {
  fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  fontSize?: number | string;
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  lineHeightRatio?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  align?: "left" | "center" | "right";
  left?: React.ReactNode;
  right?: React.ReactNode;
  regex?: Array<{ isValid: boolean; error: string }>;
  error?: string;
}

const AppInput = forwardRef(
  (
    {
      fontWeight = "300",
      fontSize = "normal",
      color,
      placeholderTextColor,
      borderWidth,
      borderRadius,
      borderColor,
      lineHeight,
      style,
      align = "left",
      left,
      right,
      regex,
      error,
      ...restProps
    }: AppInputProps,
    ref: React.LegacyRef<TextInput>
  ) => {
    const size: any = typeof fontSize === "string" ? fontSize : fontSize;
    const textStyles: TextStyle = {
      color,
      fontSize: size,
      ...(lineHeight && { lineHeight: lineHeight }),
      textAlign: align,
      flex: 1,
    };
    const wrapper: ViewStyle = {
      ...(borderWidth && { borderWidth: borderWidth, borderRadius: borderRadius, borderColor: borderColor }),
    };

    const checkRegex = regex?.length > 0 && regex?.find((item) => item?.isValid);
    return (
      <View style={[styles.container, wrapper]}>
        <View style={{ flexDirection: "row" }}>
          {left}
          <TextInput ref={ref} style={[textStyles, style]} placeholderTextColor={placeholderTextColor} {...restProps} />
          {right}
        </View>
        {checkRegex?.isValid && <Text style={styles.errorText}>{checkRegex?.error}</Text>}
      </View>
    );
  }
);

export default AppInput;

const styles = StyleSheet.create({
  container: { flex: 1 },
  error: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginLeft: 5 },
});
