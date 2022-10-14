import { SubHeadingsTypography } from "../../../types/theme";
import { createTypographyElement } from "./create-typography-element";

export const defaultSubHeaders: SubHeadingsTypography = {
  h4: createTypographyElement({
    fontSize: 32,
  }),
  h5: createTypographyElement({
    fontSize: 28,
  }),
  h6: createTypographyElement({
    fontSize: 22,
  }),
}
