import React from "react";
import { View } from "react-native";
import { Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "@routes";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, "ZipCodeDetailsScreen">
export function ZipCodeDetailsScreen({ route }: ScreenProps) {
  const { zipCode } = route.params;

  return (
    <Screen title="Detalhes do CEP" showBackButton>
      <View className="p-3">
        <Text>{zipCode}</Text>
      </View>
    </Screen>
  )
}