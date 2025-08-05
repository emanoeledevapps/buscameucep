import { Text } from "@components";
import { Linking, View } from "react-native";

export function Footer() {
  function handleOpenPrivacyPolicy() {
    Linking.openURL('https://www.edevapps.com.br/terms/busca-meu-cep/privacy-policy')
  }

  return (
    <View className="w-full items-center mt-10">
      <Text className="text-blue-500 underline" onPress={handleOpenPrivacyPolicy}>
        Política de privacidade
      </Text>
    </View>
  )
}