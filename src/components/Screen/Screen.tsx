import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

import { Header, HeaderProps } from "@components";
import { useAppSafeArea } from "@hooks";

interface Props extends HeaderProps {
  children: ReactNode
  scrollable?: boolean
  hideHeader?: boolean
}

export function Screen({ children, scrollable, hideHeader, ...headerProps }: Props) {
  const { top } = useAppSafeArea();

  if (scrollable) {
    return (
      <ScrollView className="flex-1 bg-gray-200" style={{ paddingTop: top }}>
        {!hideHeader && (
          <Header {...headerProps} />
        )}
        {children}
      </ScrollView>
    )
  }

  return (
    <View className="flex-1 bg-gray-200" style={{ paddingTop: top }}>
      {!hideHeader && (
        <Header {...headerProps} />
      )}
      {children}
    </View>
  )
}
