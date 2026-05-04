import { primary } from "@/lib/color";
import styled, { css } from "styled-components";

export const ButtonStyle= css`
  border: 1px solid #ffff;
  padding: 5px 5px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight:600; 
  color: #ffff;
  svg {
    height: 15px;
    
  }

  ${(props) =>
      props.white &&
      !props.outline &&
      css`
      background-color: #fff;
      color: #000;
    `}
    ${props=> props.block && css`
      display: block;
      width: 100%;
      margin-top:5px;
      `}

  ${(props) =>
      props.white &&
      props.outline &&
      css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
  ${(props) =>
      props.primary && !props.outline &&
      css`
      background-color: ${primary};
      color: #fff;
      border: 1px solid ${primary};
    `}
      ${(props) =>
      props.primary && props.outline &&
      css`
      background-color: transparent;
      color: ${primary};
      border: 1px solid ${primary};
    `}

  ${(props) =>
      props.size === "l" &&
      css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 18px;
      }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
