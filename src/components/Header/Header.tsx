import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@components";
import { useNavigation } from "@react-navigation/native";

export interface HeaderProps {
  showBackButton?: boolean
  title?: string
}

export function Header({ title, showBackButton }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View className="w-full h-14 flex-row items-center justify-between px-5 border-b bg-primary border-text-secondary">
      <View className="w-10">
        {showBackButton && (
          <TouchableOpacity className="w-5 h-5 bg-blue-500" onPress={handleGoBack}>

          </TouchableOpacity>
        )}
      </View>

      <Text className="font-bold text-white">{title}</Text>

      <View className="w-10" />
    </View>
  )
}