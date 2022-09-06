import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  valueType: string;
  value: number;
};

const Price = styled.p`
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  margin: 0;
  font-weight: bold;

  > .amount {
    font-size: 18px;
    margin-right: 5px
  }
`

const Select = styled.select`
  padding: 16px;
  margin-right: 16px;
`

export const ProductInfoItemValue: FC<Props> = ({valueType, value}) => {
  switch(valueType) {
    case 'donationAmount':
      return <><Price><span className='amount'>{ value.toLocaleString() }円</span>送料無料</Price></>
    case 'stock':
      if (value <= 0) {
        return <>品切れ</>
      } else if (value >= 6) {
        return <>{value}個</>
      } else if (value <= 5){
        return <>残りわずか。寄付はお早めに</>
      } else {
        return <></>
      }
    case 'value':
      let options = [];
      for (let i = 0; i < value; i++) {
        let stockValue = i + 1;
        options.push(<option value={stockValue}>{stockValue}</option>)
        if (stockValue >= 10) break;
      }
      return <>
        <Select>{options}</Select>
      </>
    default:
      return <></>
  }
};