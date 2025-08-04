import { View } from "react-native"
import { Icon, Text } from "@components"
import { ZipCodeProps } from "@domain"

interface Props {
  data?: ZipCodeProps
}
export function ZipCodeData({ data }: Props) {
  if (!data) return <View />

  return (
    <View className="gap-5">
      <View className="p-3 rounded-2xl bg-surface mt-10">
        <View className="flex-row items-center justify-end gap-2 mb-3">
          <Text className="text-text-secondary">Informações do CEP</Text>
          <Icon name="infoCircle" color="#828282"/>
        </View>

        <View className="gap-3">
          <DataItem label="Rua" value={data.publicPlace} />
          <DataItem label="Cidade" value={data.locality} />
          <DataItem label="Estado" value={data.state} />
          <DataItem label="Complemento" value={data.neighborhood} />
        </View>
      </View>

      <View className="p-3 rounded-2xl bg-surface">
        <View className="flex-row items-center justify-end gap-2 mb-3">
          <Text className="text-text-secondary">Informações complementares</Text>
          <Icon name="infoCircle" color="#828282"/>
        </View>

        <View className="gap-3">
          <DataItem label="UF" value={data.uf}/>
          <DataItem label="DDD" value={data.ddd} />
          <DataItem label="Região" value={data.region} />
        </View>
      </View>
    </View>
  )
}

interface DataItemProps {
  label: string;
  value: string | number;
}
function DataItem({ label, value }: DataItemProps) {
  return (
    <View>
      <Text className="text-sm text-text-secondary">{label}</Text>
      <Text className="text-text-primary font-semibold">
        {value === '' ? 'Não disponível' : value}
      </Text>
    </View>
  )
}