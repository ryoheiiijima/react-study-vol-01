import { FC } from 'react';
import { ProductInfoItemValue } from './ProductInfoItemValue'
import styled from 'styled-components';

type Props = {
  label: string;
  valueType: string;
  value: number;
};


const ItemWrap = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;

  > .label {
    font-size: 14px;
    color: #6b6b6b;  
  }
`;

export const ProductInfoItem: FC<Props> = ({label, valueType, value}) => {
    return <>
    <ItemWrap>
      <span className='label'>{ label }：</span>
      <ProductInfoItemValue valueType={valueType} value={value}></ProductInfoItemValue>
    </ItemWrap>
    </>;
};
