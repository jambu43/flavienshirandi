import styled from "styled-components";

const Footer = () => {
  return (
    <div data-scroll-section>
      <FooterContainer data-scroll data-scroll-position="bottom">
        <FooterLogo>
          <Link href="/">
            <img src="logo/logo.png" alt="" width={200} />
          </Link>
        </FooterLogo>

        <QuickLink>
          <Link href="/">Home</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/companies">Companies</Link>
        </QuickLink>

        <ContactContainer>
          <Link href="">+243 973 470 888</Link>
          <Link href="">info@flavienshirandi.com</Link>
          <AddressContainer>
            26, Mont des arts Avenue, <br />
            Gombe, Kinshasa <br />
            Democratic Republic of Congo
          </AddressContainer>
        </ContactContainer>
        <img src="/images/vector.png" alt="" className="footer-vector" />
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.div`
  padding: 11.3rem 5rem;
  display: flex;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #000;
  align-items: flex-start;
`;
const FooterLogo = styled.div`
  width: 25%;
`;
const QuickLink = styled.div`
  display: flex;
  width: 25%;
  flex-flow: column;
  flex-direction: column;
`;
const ContactContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;
const AddressContainer = styled.a`
  margin-top: 2rem;
  line-height: 1.3;
`;
const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 1rem;
`;

export default Footer;
