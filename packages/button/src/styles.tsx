import styled, { css } from "styled-components";
import { math } from "polished";

type StyledButtonProps = {
  readonly $isFluid: boolean;
};

const fluidStyle = css`
  width: 100%;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  color: ${({ theme: { colors } }) => colors.onPrimary.default};
  ${({ $isFluid }) => $isFluid && fluidStyle};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.default};
  border: 0;
  padding-inline: ${({ theme: { spacer, density } }) =>
    math(`${spacer.l} * ${density.default}`)};
  padding-block: ${({ theme: { spacer, density } }) =>
    math(`${spacer.s} * ${density.default}`)};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary.hover};
    color: ${({ theme: { colors } }) => colors.onPrimary.hover};
  }
`;
