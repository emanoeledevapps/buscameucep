import { View, Image } from "react-native";
//@ts-ignore
import LogoApp from "../../../assets/images/logo-elements.png";
import { Text } from "@components";

export function Logo() {
  return (
    <View className="flex-row w-full items-center justify-center mb-10">
      <Image
        source={LogoApp}
        className="w-32 h-32"
        resizeMode="contain"
      />

      <Text className="text-2xl text-text-primary font-semibold">Busca meu CEP</Text>
    </View>
  )
}