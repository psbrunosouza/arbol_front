import styled from "styled-components";

interface ILink {
  color?: string;
  spacing?: number;
}

export const LinkContainer = styled.a<ILink>`
  margin: ${(props) => props.spacing + "px"} 0;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
    font-weight: bold;
  }

  transition: color 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
