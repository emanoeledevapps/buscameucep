import React from "react";
import { View } from "react-native";

export interface HeaderProps {
  showBackButton?: boolean
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <View className="w-full h-14 flex items-center justify-between px-5 border-b">
      
    </View>
  )
}