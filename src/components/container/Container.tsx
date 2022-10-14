import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import { StyledContainer } from "./styled/styled-container";

export const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({children, ...props}) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

