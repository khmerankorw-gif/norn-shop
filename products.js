import Header from "@/components/Header";
import Main from "@/components/Main";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/form/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function ProductsPage({ products }) {

  return (
    <>
      <Header />
      <Main>
        <Title>All products</Title>
          <ProductsGrid products={products} />
      </Main>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  // console.log({products});
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
