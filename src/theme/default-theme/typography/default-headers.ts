import { HeadingsTypography } from "../../../types/theme";
import { createTypographyElement } from "./create-typography-element";

export const defaultHeaders: HeadingsTypography = {
  h1: createTypographyElement({
    fontSize: 64,
    fontWeight: 700,
  }),
  h2: createTypographyElement({
    fontSize: 48,
    fontWeight: 700,
  }),
  h3: createTypographyElement({
    fontSize: 36,
    fontWeight: 700,
  }),
}
