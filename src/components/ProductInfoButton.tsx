import { FC } from 'react';
import styled from 'styled-components';

type Props = {};

const Button = styled.button`
  width: 198px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #ad0003;
  color: #fff;
  border-color: #ad0003;
  appearance: none;
  border: none;
  cursor: pointer;
`;

export const ProductInfoButton: FC<Props> = () => {
    return <>
      <Button>ふるさと納税でもらう</Button>
    </>;
};
