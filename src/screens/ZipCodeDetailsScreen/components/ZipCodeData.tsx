import { Text } from "@components"
import { ZipCodeProps } from "@domain"
import { View } from "react-native"

interface Props {
  data?: ZipCodeProps
}
export function ZipCodeData({ data }: Props) {
  if (!data) return <View />

  return (
    <View className="p-3 rounded-2xl bg-surface mt-10">
      <Text>{data?.locality} - {data?.uf}</Text>
      <Text>{data?.publicPlace}</Text>
      <Text>{data?.neighborhood}</Text>
      <Text>{data?.ddd}</Text>
      <Text>{data?.region}</Text>
      <Text>{data?.state}</Text>
    </View>
  )
}