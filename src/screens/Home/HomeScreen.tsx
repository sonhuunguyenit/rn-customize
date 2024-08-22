import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scroll}>
        <AppButton />
        <AppText />
        <AppHeader />
        <AppInput />
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
