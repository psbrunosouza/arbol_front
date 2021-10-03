import styled from "styled-components";

type IButton = {
  width: string;
  height: string;
  color?: string;
  backgroundColor?: string;
  borderSize?: number;
  borderColor?: string;
  borderType?: string;
  spacing?: number;
}

export const ButtonContainer = styled.div<IButton>`
   button{
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${props => props.color};
    width: 100%;
    height: 100%;
    font-weight: bold;
    text-transform: uppercase ;
  }

  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.borderSize + 'px'} ${props => props.borderType} ${props => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: ${props => props.spacing + 'px'} 0;

  transition: all 0.2s;

  &:hover{
    filter: brightness(1.2);
  }
`;