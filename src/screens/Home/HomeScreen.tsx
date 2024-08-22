import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { forwardRef, useRef, useState } from "react";
import {
  AppButton,
  AppText,
  AppHeader,
  AppInput,
  AppList,
  AppRadio,
  AppRow,
  AppToast,
  AppGlobalModal,
  AppCollapse,
  AppTab,
  AppImage,
  AppForm,
  AppCheckBox,
  AppSkeleton,
  AppSearchInput,
} from "../../component";
import { Colors } from "../../Theme";

const HomeScreen = ({ onFocus = {} }) => {
  const [userName, setUserName] = useState<string>("");
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scroll}>
        <AppButton />
        <AppText />
        <AppHeader />
        <AppInput
          fontSize={18}
          fontWeight="300"
          numberOfLines={2}
          value={userName}
          regex={[
            {
              isValid: true,
              error: "Email không đúng định dạng",
            },
            {
              isValid: false,
              error: "Ký tự không được nhỏ hơn 10",
            },
          ]}
          onChangeText={setUserName}
          placeholder={"Vui lòng nhập string"}
          placeholderTextColor={Colors.placeholder}
        />
        <AppList />
        <AppRadio />
        <AppRow />
        <AppToast />
        <AppGlobalModal />
        <AppCollapse />
        <AppTab />
        <AppImage />
        <AppForm />
        <AppCheckBox />
        <AppSkeleton />
        <AppSearchInput />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  scroll: { width: "100%", height: "100%", padding: 10 },
  contentScroll: {
    rowGap: 20,
  },
});
