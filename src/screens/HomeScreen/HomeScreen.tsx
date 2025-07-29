import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen } from "@components";
import { AppStackParamsList } from "@routes";

type ScreenProps = NativeStackScreenProps<AppStackParamsList, "HomeScreen">
export function HomeScreen({ navigation }: ScreenProps) {
  const [zipCode, setZipCode] = useState('')

  function handleGoToZipCodeDetailsScreen() {
    navigation.navigate("ZipCodeDetailsScreen", {
      zipCode
    })
  }

  return (
    <Screen>
      <View className="flex-1 items-center justify-center p-3">
        <TextInput 
          value={zipCode}
          onChangeText={setZipCode}
          className="text-black w-full h-12 rounded-2xl px-3"
          placeholder="Digite o cep"
        />

        <Button title="Buscar cep" onPress={handleGoToZipCodeDetailsScreen}/>
      </View>
    </Screen>
  )
}