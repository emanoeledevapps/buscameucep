import React from "react";
import { View } from "react-native";

import { Screen } from "@components";
import { SearchArea } from "./components/SearchArea";
import { Logo } from "./components/Logo";

export function HomeScreen() {


  return (
    <Screen hideHeader>
      <View className="flex-1 items-center justify-center p-5">
        <Logo />
        <SearchArea />
      </View>
    </Screen>
  )
}