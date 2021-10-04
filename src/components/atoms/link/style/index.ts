import styled from "styled-components";

interface ILink {
  color?: string;
  spacing?: number;
}

export const Link = styled.a<ILink>`
  color: ${props => props.color};
  font-weight: bold;
  text-decoration: none;
  margin: ${props => props.spacing + 'px'} 0;

  transition: color 0.2s;

  &:hover{
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }
`;