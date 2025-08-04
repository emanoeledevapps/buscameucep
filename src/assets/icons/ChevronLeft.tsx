import { IconBaseProps } from "@components";
import {Svg, Path} from "react-native-svg";

export function ChevronLeftIcon({size = 20, color = 'white'}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}
