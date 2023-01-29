import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  background-color: #000;
`;
const NavLogo = styled.div`
  width: 25%;
`;
const NavElement = styled.div`
  width: 65%;
  display: flex;
`;

const NavLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.72);
  margin-left: 5rem;
  &:hover {
    color: #fff;
    cursor: pointer;
  }

`;

const NavActionContainer = styled.div`
  width: 10%;
`;
const NavAction = styled.a`
  border: 1px solid #848484;
  border-radius: 69px;
  padding: 1em 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #848484;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

const Navbar = () => (
  <NavContainer>
    <NavLogo>
      <Link href="/">
        <img src="logo/logo.png" alt="" />
      </Link>
    </NavLogo>

    <NavElement>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/journal">
        <NavLink>Journal</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/works">
        <NavLink>Works</NavLink>
      </Link>
      <Link href="/companies">
        <NavLink>Companies</NavLink>
      </Link>
    </NavElement>

    <NavActionContainer>
      <NavAction href="#action">LET’S TALK</NavAction>
    </NavActionContainer>
  </NavContainer>
);

export default Navbar;
