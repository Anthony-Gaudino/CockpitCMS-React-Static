import React from "react";
import { useRouteData } from "react-static";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
//
import BlogCard from "./BlogCard";
import { getImageStyleUrl } from "../../../cockpit/utils";

const ContainerStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const RowInfo = styled(Row)`
  margin-bottom: 1rem;
`;

export default () => {
  const { posts, info, max, cols, name } = useRouteData();
  let numCols = cols;

  if (max > 1) {
    posts = posts.slice(0, max);
  }
  if (!numCols) {
    numCols = 4;
  }
  return (
    <ContainerStyled className={`component--${name}`}>
      <RowInfo>
        <Col>{info}</Col>
      </RowInfo>
      <Row>
        {posts &&
          posts.map((post, idx) => (
            <Col xs="12" md="6" lg={numCols === 4 ? 3 : 4} key={`post-${idx}`}>
              <BlogCard
                image={getImageStyleUrl("Card", post.image)}
                title={post.title}
                text={post.summary}
                link={`/blog/${post.slug}`}
              />
            </Col>
          ))}
      </Row>
    </ContainerStyled>
  );
}
