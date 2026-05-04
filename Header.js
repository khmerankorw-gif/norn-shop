import Link from "next/link";
import styled from "styled-components";
import Main from "./Main";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bar";
import CartMenuIcon from "./icons/Cart";
const StyledHeader = styled.header`
  background-color: #222;
  padding-top: 10px;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
  display: block;
`
      : `
display: none;
`}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 20px 20px;
  background-color: #222;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 5px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Main>
        <Wrapper>
          <Logo href={"/"}>Nornshop</Logo>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>

            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>

            <NavLink href={"/cart"}>
              {" "}
              <CartMenuIcon />{" "}
              <span
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius: "9999px",
                  backgroundColor: "#992cff",
                  fontSize: "0.75rem",
                  color: "#ffffff",
                  padding: "5px",
                  lineHeight:'1rem',
                  width:'0.75rem',
                  height:'0.75rem',
                  position:'relative',
                  top:'-2.5rem',
                  right:'-0.75rem',
                }}
              >
                {cartProducts.length}
              </span>
            </NavLink>
          </StyledNav>

          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Main>
    </StyledHeader>
  );
}
