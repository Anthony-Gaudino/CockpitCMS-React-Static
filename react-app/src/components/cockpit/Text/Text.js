import React from "react";
import convert from "htmr";
import { Link } from "@reach/router";
import { Container } from "reactstrap";
import styled from "styled-components";
//
import Image from "../../Image";

const ContainerStyled = styled(Container)`
  strong {
    font-weight: bold;
    color: rgb(50, 50, 50);
  }
`;

const transform = {
  img: node => <Image {...node} />,
  a: node => <Link to={node.href} {...node} />,
};

export default ({ name, text }) => (
  <ContainerStyled className={`component--${name}`}>
    {text && convert(text, { transform })}
  </ContainerStyled>
);
