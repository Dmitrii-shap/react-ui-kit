export type Breakpoint = 'xs' | 'sm' | 'md';
export type BreakpointValues = Record<Breakpoint, number>;

export type BreakpointKeyParam = Breakpoint | number;
export interface Breakpoints {
  values: BreakpointValues;
  up: (key: BreakpointKeyParam) => string;
  down: (key: BreakpointKeyParam) => string;
  between: (start: BreakpointKeyParam, end: BreakpointKeyParam) => string;
}
