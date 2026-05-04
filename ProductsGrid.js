import styled from "styled-components";
import ProductBox from "./ProductBox";
import Spinner from "./loading/Spinner";
import { useEffect, useState } from "react";
const StyleProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
    @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
export default function ProductsGrid({products}) {
  // State to manage loading status
   const [loading, setLoading] = useState(true);
   useEffect(() => {
     // Simulate a loading delay (e.g., fetching data)
     const timer = setTimeout(() => {
       setLoading(false);
     }, 200); // Adjust the duration as needed
 
     return () => clearTimeout(timer); // Cleanup the timer on unmount
   }, []);
 
    if (loading) {
      return <Spinner/>;
    } 
  
  return (
    <StyleProductsGrid>
      {products?.length > 0 &&
        products.map((product) => <ProductBox key={product._id} {...product} />)}
    </StyleProductsGrid>
  );
}
