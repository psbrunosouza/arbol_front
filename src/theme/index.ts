import styled from "styled-components";
import { animated } from "react-spring";

interface IColumn {
  /** apply width to the column */
  width: string;
  /** apply column to the color */
  color?: string;
  /** align column items horizontally */
  justify?: string;
  /** align column items vertically */
  align?: string;
}

interface IRow {
  /** apply width to the row */
  width?: string;
  /** apply height to the row */
  height?: string;
  /** apply color to the row */
  color?: string;
  /** align the content horizontally */
  justify?: string;
  /** align the content vertically */
  align?: string;
  /** tell to the row that the content is fixed */
  fixed?: boolean;
  /** when fixed apply a value to positioning the row */
  topFixed?: number;
  /** when fixed apply a value to positioning the row */
  bottomFixed?: number;
  /** when fixed apply a value to positioning the row */
  leftFixed?: number;
  /** when fixed apply a value to positioning the row */
  rightFixed?: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: hidden;
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

export const AnimatedColumn = styled(animated(Column))``;
export const AnimatedContainer = styled(animated(Container))``;

export const Row = styled.div<IRow>`
  display: flex;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  top: ${(props) => props.topFixed};
  bottom: ${(props) => props.bottomFixed};
  left: ${(props) => props.leftFixed};
  right: ${(props) => props.rightFixed};
`;
