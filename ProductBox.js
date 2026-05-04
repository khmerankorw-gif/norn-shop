/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./form/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { formatCurrency } from "@/lib/formatCurrency";

const ProductWra = styled.div`

`;

const BoxStyle = styled(Link)`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  height: 120px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    max-width: 100%;
    max-height: 110px;
    border-radius:3px;
  }
`;
const Title = styled(Link)`
font-size: .9rem;
font-weight: normal;
color: inherit;
text-decoration:none;
margin: 0;
`;
const ProductDetail = styled.div`
margin-top: 5px;
`;
const PriceBox = styled.div`
display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
align-items:center;
justify-content:space-between;
margin-top:5px;
`;
const Price = styled.div`
font-size: 1rem;
font-weight: 500;
text-align: right;
 @media screen and (min-width: 768px) {
  font-size:1.1rem;
  font-weight: 600;
  text-align: left;
  }
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWra>
      <BoxStyle href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </BoxStyle>
      <ProductDetail>
        <Title href={url}>{title}</Title>
        <PriceBox>
          <Price>
            {formatCurrency(price)}
          </Price>
          
          <Button block onClick={()=>addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceBox>
      </ProductDetail>
    </ProductWra>
  );
}
