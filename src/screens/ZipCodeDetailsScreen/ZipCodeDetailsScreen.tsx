import React, { useEffect } from "react";
import { Alert, View } from "react-native";
import { Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "@routes";
import { zipCodeService } from "../../domain/ZipCode/zipCodeService";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, "ZipCodeDetailsScreen">
export function ZipCodeDetailsScreen({ route }: ScreenProps) {
  const { zipCode } = route.params;

  useEffect(() => {
    zipCodeService.getZipCodeDetails(zipCode).then((res) => Alert.alert(res.state))
  }, [zipCode])

  return (
    <Screen title="Detalhes do CEP" showBackButton>
      <View className="p-3">
        <Text>{zipCode}</Text>
      </View>
    </Screen>
  )
}