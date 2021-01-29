import { Theme as MonokitTheme } from "../../index";

declare module "styled-components" {
  export interface DefaultTheme extends MonokitTheme {}
}
