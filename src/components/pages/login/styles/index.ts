import styled from "styled-components";

interface IColumn {
  width: string;
  color?: string;
  justify?: string;
  align?: string;
}

interface IRow {
  width?: string;
  height?: string;
  color?: string;
  justify?: string;
  align?: string;
  fixed?: boolean;
  topFixed?: number;
  bottomFixed?: number;
  leftFixed?: number;
  rightFixed?: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`;

export const Column = styled.div<IColumn>`
  width: ${(props) => props.width};
  height: 100vh;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const Row = styled.div<IRow>`
  display: flex;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  
  position: ${(props) => props.fixed ? 'fixed' : 'relative'};

  top: ${(props) => props.topFixed};
  bottom: ${(props) => props.bottomFixed};
  left: ${(props) => props.leftFixed};
  right: ${(props) => props.rightFixed};
  
    
  
  
`;
