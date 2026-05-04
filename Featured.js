/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Main from "./Main";
import Button from "./form/Button";
import { ButtonL } from "@/components/form/ButtonL";
import CartIcons from "./icons/CartIcons";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ViewIcon from "./icons/View";

const BgColor = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
  font-size: 3rem;
  }
`;
const Des = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 350px;
    display: block;
    margin: 0 auto;
  }
    div:nth-child(1){
    order: 2;
    }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    div:nth-child(1){
    order: 0;
    }
    img{
    max-width: 100%;
    }
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;
export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct((prev) => [...prev, product._id]);
  }
  return (
    <BgColor>
      <Main>
        <Wrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Des>{product.description}</Des>
              <ButtonWrap>
                <ButtonL
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonL>

                <ButtonL href={'/product/'+product._id}>
                  <ViewIcon/>
                  View
                </ButtonL>
                
              </ButtonWrap>
            </div>
          </Column>
          <Column>
            <img src={product.images[0]} alt="" />
          </Column>
        </Wrapper>
      </Main>
    </BgColor>
    
  );
}
