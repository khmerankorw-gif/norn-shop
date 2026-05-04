import Featured from "@/components/Featured";
import Header from "@/components/Header";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredProduct,newProducts}) {
  return(
    <div>
      <Header />
        <Featured product={featuredProduct}/>
        <NewProducts products={newProducts}/>
    </div>
  );
}

export async function getServerSideProps(){
  await mongooseConnect();
  const featuredProductId = "69f40fba18d97cc8dc8f5404";
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null,{sort: {'_id':-1}, limit: 12});
  
  return {
    props:{ 
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    
    }
  }
}