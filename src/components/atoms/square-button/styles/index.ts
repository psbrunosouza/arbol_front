import styled from "styled-components";

export const SquareButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e5e5e5;
  margin: 0 5px;
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.025);
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    background: transparent;
  }
`;
