import defaultsDeep from "lodash.defaultsdeep";
import { DefaultTheme } from "styled-components";
import { Breakpoints, BreakpointValues } from "../../types/theme/breakpoints";
import { defaultBreakpointsValue } from "../defaults-theme";

export const createBreakpoints = (
  overrideBreakpoints?: RecursiveOptional<DefaultTheme['breakpoints']>
): DefaultTheme['breakpoints'] => {

  const values: BreakpointValues = defaultsDeep(overrideBreakpoints?.values, defaultBreakpointsValue)

  const up: Breakpoints['up'] = (key) => {
    const value = typeof key === 'number' ? key : values[key] - 1;
    return `@media (min-width:${value}px)`;
  }

  const down: Breakpoints['down'] = (key) => {
    const value = typeof key === 'number' ? key : values[key];
    return `@media (max-width:${value}px)`;
  }

  const between: Breakpoints['between'] = (start, end) => {
    const startValue = typeof start === 'number' ? start : values[start];
    const endValue = typeof end === 'number' ? end : values[end];

    return `@media (min-width:${startValue}px) and (max-width:${endValue}px)`
  };

  return {
    values,
    up,
    down,
    between
  };
}
