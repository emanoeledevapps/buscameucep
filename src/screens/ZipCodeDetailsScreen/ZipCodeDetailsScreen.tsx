import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "@routes";
import { useGetZipCodeDetails } from "@domain";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, "ZipCodeDetailsScreen">
export function ZipCodeDetailsScreen({ route }: ScreenProps) {
  const { zipCode } = route.params;

  const { isError, data, isLoading } = useGetZipCodeDetails({ zipCode })

  if (isLoading) {
    return (
      <Screen title="Detalhes do CEP" showBackButton>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={50} color="red" />
        </View>
      </Screen>
    )
  }

  return (
    <Screen title="Detalhes do CEP" showBackButton>
      <View className="p-3">
        <Text>{zipCode}</Text>
      </View>
    </Screen>
  )
}