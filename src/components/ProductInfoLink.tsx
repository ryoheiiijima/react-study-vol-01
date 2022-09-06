import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  url: string;
};

const Link = styled.div`
  > .link {
    display: inline-block;
    text-decoration: none;
    color: orange;
    font-size: 14px;
    ::before {
      content: "<";
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      background: #ffffff;
      border-radius: 50%;
      border: 1px solid orange;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }  
  }
`;

export const ProductInfoLink: FC<Props> = ({url}) => {
  if (!url)return <></>;
  return <>
    <Link>
      <a href={url} className="link">通常購入に戻る</a>
    </Link>
  </>;
};
