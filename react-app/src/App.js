import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Root, Routes } from "react-static";
import { Container, Row, Col } from "reactstrap";
import styled, { createGlobalStyle } from "styled-components";
//
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link } from "@reach/router";

const theme = {
  fontFamily: "Cabin, sans-serif",
  primaryColor: "rgb(41, 48, 132)",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily};
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  #root {
    margin-top: -1px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.primaryColor};
  }

  img {
    max-width: 100%;
  }

  .content {
    padding: 1rem;
  }

  .container-fluid {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainRow = styled(Row)`
  flex: 1 1 0%;
`;

const App = () => (
  <Root>
    <>
      <ContainerStyled fluid>
        <Row>
         <Col>
           <React.Suspense fallback={<div>Loading...</div>}>
             <Header />
           </React.Suspense>
          </Col>
        </Row>
        <MainRow>
          <Col>
            <main>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes />
              </React.Suspense>
            </main>
          </Col>
        </MainRow>
        <Row>
          <Col>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </React.Suspense>
          </Col>
        </Row>
      </ContainerStyled>
      <GlobalStyle />
    </>
  </Root>
);

export default (App);
