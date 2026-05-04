/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Button from "@/components/form/Button";
import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import Input from "@/components/form/Input";
import Main from "@/components/Main";
import Table from "@/components/form/Table";
import { formatCurrency } from "@/lib/formatCurrency";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import PlusIcon from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";

const ColumnWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
    display: flex;
  }
gap:40px;
margin-top: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 22px;
  width: 90%
`;
const Box2 = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  @media screen and (min-width: 768px) {
  width: 40%;
  }
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;
const ProductImageBox = styled.div`
  width: 70px;
  heigth: 70px;
  padding: 2px;
  background-color: #f0f0f0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    max-width: 60px;
    max-height: 60px;
  }
    @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
  heigth: 100px;
    img {
    max-width: 80px;
    max-height: 80px;
  }
  }
`;
const QtyLabel = styled.span`
padding: 0 3px;
display: inline-block;
@media screen and (min-width: 768px) {
  display: block;
  padding: 0 15px;
    }
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;
export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
      // return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);
  function addMoreProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  //calculate total of cart products
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }
  if (isSuccess) {
    return (
      <>
        <Header />
        <Main>
          <ColumnWrapper>
            <Box>
              <Confetti recycle={false} numberOfPieces={200} />
              <h1>Thank you for order!</h1>
              <p>
                Please wait our cashier will email you once your order has been
                verified.
              </p>
            </Box>
          </ColumnWrapper>
        </Main>
      </>
    );
  }
  return (
    <>
      <Header />
      <Main>
        <ColumnWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price(in USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          <Minus/>
                        </Button>
                        <QtyLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QtyLabel>
                        <Button onClick={() => addMoreProduct(product._id)}>
                          <PlusIcon/>
                        </Button>
                      </td>
                      <td>
                        {formatCurrency(
                          cartProducts.filter((id) => id === product._id)
                            .length * product.price,
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total: {formatCurrency(total)}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box2>
              <h2>Order information</h2>
              {/* <form method="post" action="/api/checkout"> */}
              {/* </form> //TESTING*/}
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button block primary onClick={goToPayment}>
                Continue to payment
              </Button>
            </Box2>
          )}
        </ColumnWrapper>
      </Main>
    </>
  );
}
