import styled from "styled-components";
import Main from "./Main";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
  font-size:bold;
`;
export default function NewProducts({ products }) {
  return (
    <Main>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products}/>
      {/* <ProductGrid>
        {products?.length > 0 &&
          products.map((product) => 
          <ProductBox {...product} />
          )}
      </ProductGrid> */}
    </Main>
  );
}
