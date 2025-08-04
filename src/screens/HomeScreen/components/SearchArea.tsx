import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParamsList } from "@routes";
import { Icon } from "@components";

type NavigationProps = NativeStackNavigationProp<AppStackParamsList, "HomeScreen">
export function SearchArea() {
  const navigation = useNavigation<NavigationProps>()
  const [zipCode, setZipCode] = useState('')

  function handleGoToZipCodeDetailsScreen() {
    navigation.navigate("ZipCodeDetailsScreen", {
      zipCode
    })
  }

  return (
    <View className="flex-row w-full gap-5">
      <TextInput 
        value={zipCode}
        onChangeText={setZipCode}
        className="text-black w-full h-14 rounded-2xl px-3 flex-1 bg-surface"
        placeholder="Digite o cep aqui"
        placeholderTextColor="#bbb"
        keyboardType="numeric"
        maxLength={8}
      />

      <TouchableOpacity
        onPress={handleGoToZipCodeDetailsScreen}
        className="w-14 h-14 rounded-2xl bg-primary items-center justify-center disabled:opacity-50"
        disabled={zipCode.length < 8}
      >
        <Icon name="search" size={25} />
      </TouchableOpacity>
    </View>
  )
}
