import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

import { Header, HeaderProps, StatusBar } from "@components";

interface Props extends HeaderProps {
  children: ReactNode
  scrollable?: boolean
  hideHeader?: boolean
}

export function Screen({ children, scrollable, hideHeader, ...headerProps }: Props) {
  if (scrollable) {
    return (
      <ScrollView className="flex-1 bg-background">
        <StatusBar />
        {!hideHeader && (
          <Header {...headerProps} />
        )}
        {children}
      </ScrollView>
    )
  }

  return (
    <View className="flex-1 bg-background">
      <StatusBar />
      {!hideHeader && (
        <Header {...headerProps} />
      )}
      {children}
    </View>
  )
}
