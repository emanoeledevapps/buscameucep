import React from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "@routes";
import { useGetZipCodeDetails } from "@domain";
import { ZipCodeData } from "./components/ZipCodeData";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, "ZipCodeDetailsScreen">
export function ZipCodeDetailsScreen({ route }: ScreenProps) {
  const { zipCode } = route.params;

  const { isError, data, isLoading, isRefetching, refetch } = useGetZipCodeDetails({ zipCode })

  if (isLoading || isRefetching) {
    return (
      <Screen title="Detalhes do CEP" showBackButton>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={100} color="#2F80ED" />
        </View>
      </Screen>
    )
  }

  if (isError) {
    return (
      <Screen title="Detalhes do CEP" showBackButton>
        <View className="flex-1 items-center justify-center">
          <Text className="text-error">Erro ao obter os dados do cep</Text>
          <Button title="Tentar novamente" onPress={() => refetch()} />
        </View>
      </Screen>
    )
  }

  if (data?.zipCodeNotFound) {
    return (
      <Screen title="Detalhes do CEP" showBackButton>
        <View className="flex-1 items-center justify-center">
          <Text className="font-bold text-center text-4xl">{zipCode}</Text>
          <Text className="text-error">CEP não encontrado</Text>
        </View>
      </Screen>
    )
  }

  return (
    <Screen title="Detalhes do CEP" showBackButton scrollable>
      <View className="p-5 pt-10">
        <Text className="font-bold text-center text-6xl text-text-primary">{zipCode}</Text>
        
        <ZipCodeData data={data} />
      </View>
    </Screen>
  )
}