import styled from "styled-components";

interface IInput {
  width: string;
  height: string;
  placeholderColor?: string;
  color?: string;
  borderSize?: number;
  borderType?: string;
  fontSize?: number;
  borderColor?: string;
  spacing?: number;
}

export const Input = styled.div<IInput>`
  input {
    border: none;
    outline: none;
    margin-left: 6px;
    color: ${(props) => props.color};
    font-size:  ${(props) => props.fontSize};
    width: 100%;
  }

  input::placeholder {
    color: ${(props) => props.placeholderColor};
  }

  svg {
    margin-left: 12px;
  }

  background-color: #fff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  padding: 4px;
  margin: ${props => props.spacing + 'px'} 0;
  border: ${(props) => props.borderSize + "px"} ${(props) => props.borderType} ${(props) => props.borderColor};
`;
