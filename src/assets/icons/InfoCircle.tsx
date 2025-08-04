import { IconBaseProps } from "@components";
import {Svg, Path, Circle} from "react-native-svg";

export function InfoCircleIcon({size = 20, color = 'white'}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
        <Path d="M12 17V11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <Circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill={color} />
    </Svg>
  )
}
