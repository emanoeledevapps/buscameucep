import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

import { Header, HeaderProps } from "@components";
import { useAppSafeArea } from "@hooks";

interface Props extends HeaderProps {
  children: ReactNode
  scrollable?: boolean
}

export function Screen({ children, scrollable, ...headerProps }: Props) {
  const { top } = useAppSafeArea();

  if (scrollable) {
    return (
      <ScrollView className="flex-1" style={{ paddingTop: top }}>
        {children}
      </ScrollView>
    )
  }

  return (
    <View className="flex-1" style={{ paddingTop: top }}>
      <Header {...headerProps} />
      {children}
    </View>
  )
}
