import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  logo: string;
};

function Logo({ logo }: Props) {
  return (
    <Link href={"/"} passHref>
      <Image
        src={logo}
        layout="responsive"
        width={293}
        height={33}
        objectFit="cover"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
