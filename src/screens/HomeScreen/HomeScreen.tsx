import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
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
      <View className="flex-1 items-center justify-center p-5">
        <View className="flex-row w-full gap-5">
          <TextInput 
            value={zipCode}
            onChangeText={setZipCode}
            className="text-black w-full h-14 rounded-2xl px-3 flex-1 bg-surface"
            placeholder="Digite o cep aqui"
            keyboardType="numeric"
            maxLength={8}
          />

          <TouchableOpacity
            onPress={handleGoToZipCodeDetailsScreen}
            className="w-14 h-14 rounded-2xl bg-primary items-center justify-center"
          >

          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}