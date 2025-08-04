import { SearchIcon } from "../../assets/icons/SearchIcon";

export interface IconBaseProps {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  size?: number;
  color?: string;
}
export function Icon({ name, color, size }: Props) {
  const IconComponent = icons[name]
  return <IconComponent color={color} size={size} />
}

const icons = {
  search: SearchIcon
}

export type IconName = keyof typeof icons;