"use client";

import Link from "next/link";
import styled from "styled-components";

// colors, for my own reference:
// ink black: #040F16
// ghost white: #FBFBFF
// dark gray?: #212a30ff
// bright sky: #01BAEF
// yale blue (ew, yale): #0B4F6C 
// brick ember: #B80C09

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  background-color: #212a30ff;
  border-bottom: 2px solid #01baef;
  box-shadow: 0 4px 10px rgba(1, 186, 239, 0.2);
`;


const Logo = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 800;
  font-size: calc(2px + 3.5vw);
  color: #fbfbff;
  
  /* cute little middle-of-words red // for some visual interest */
  span {
    color: #b80c09; 
    text-shadow: 0 0 8px rgba(184, 12, 9, 0.6);
  }
`;

// not really anything to navigate to, but i think it mades the site look better :]
const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #01baef;
    text-decoration: none; /* get rid of link underline */
    font-size: calc(2px + 1.75vw);
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #fbfbff;
      border-bottom: 1px solid #b80c09;
      transform: translateY(-2px); /* Speedy tech-y lift */
    }
  }
`;

  export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        URL<span>//</span>SHORTENER
      </Logo>
      <Nav>
        <Link href="/">Home</Link>
        
      </Nav>
    </HeaderContainer>
  );
}