import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";

export type Props = {
  bgColor: string;
  logo: string;
  textColor: string;
};

export const Navbar = ({ bgColor, logo, textColor }: Props) => {
  return (
    <NavContainer data-scroll-section bgColor={bgColor ? bgColor : "#000"}>
      <NavLogo data-scroll>
        <Logo logo={logo ? logo : "/logo/logo.png"} />
      </NavLogo>

      <NavElement data-scroll>
        <Link href="/" passHref>
          <NavLink textColor={textColor ? textColor : "#ffffffb8"}>
            Home
          </NavLink>
        </Link>
        <Link href="/journal" passHref>
          <NavLink textColor={textColor ? textColor : "#ffffffb8"}>
            Journal
          </NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink textColor={textColor ? textColor : "#ffffffb8"}>
            About
          </NavLink>
        </Link>
        <Link href="/works" passHref>
          <NavLink textColor={textColor ? textColor : "#ffffffb8"}>
            Works
          </NavLink>
        </Link>
        <Link href="/companies" passHref>
          <NavLink textColor={textColor ? textColor : "#ffffffb8"}>
            Companies
          </NavLink>
        </Link>
      </NavElement>

      <NavActionContainer data-scroll>
        <NavAction href="#action">LET’S TALK</NavAction>
      </NavActionContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  background-color: ${(props) => props.bgColor};
`;
const NavLogo = styled.div`
  width: 25%;
`;
const NavElement = styled.div`
  width: 65%;
  display: flex;
`;

const NavLink = styled.a<Props>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props) => props.textColor};
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
  font-family: "Poppins", sans-serif;
  color: #848484;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export default Navbar;
