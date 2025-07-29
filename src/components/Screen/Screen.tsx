import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

import { Header } from "@components";
import { useAppSafeArea } from "@hooks";

interface Props {
  children: ReactNode
  scrollable?: boolean
}

export function Screen({ children, scrollable }: Props) {
  const { top } = useAppSafeArea();

  if (scrollable) {
    return (
      <ScrollView style={{ paddingTop: top }}>
        {children}
      </ScrollView>
    )
  }

  return (
    <View style={{ paddingTop: top }}>
      <Header />
      {children}
    </View>
  )
}
