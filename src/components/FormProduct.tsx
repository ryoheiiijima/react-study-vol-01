import { FC } from 'react';
import { ProductInfoItem } from "./ProductInfoItem";
import { ProductInfoButton } from "./ProductInfoButton";
import { ProductInfoLink } from "./ProductInfoLink";
import styled from 'styled-components';

type Props = {
  price: number;
  count: number;
  url: string;
};

const items = [];

const ProductInfoBox = styled.div`
  padding: 20px;
  background: #f6f6f6;
  display: inline-block;
  > .red {
    color: red;
  }
  > .fs14 {
    font-size: 14px;
  }
  > .flex {
    display: flex;
    align-items: center;
  }
`;

export const FormProduct: FC<Props> = ({ price, count, url }) => {
    return <>
      <ProductInfoBox>
        <ProductInfoItem label="寄付額" valueType="donationAmount" value={price} />
        <p className='red fs14'>何回お礼の品をもらっても実質年間2,000円の負担</p>
        <ProductInfoItem label="在庫" valueType="stock" value={count} />
        <div className='flex'>
          <ProductInfoItem label="数量" valueType="value" value={count} />
          <ProductInfoButton />
        </div>
        <ProductInfoLink url={url} />
      </ProductInfoBox>
    </>;
};
