import React from "react";
import { useRouteData } from "react-static";
import { Nav, NavItem } from "reactstrap";
import { Link } from "@reach/router";
import styled from "styled-components";
//
const NavStyled = styled(Nav)`
  padding-top: 1rem;
  li {
    padding: 0.25rem 0.05rem;
  }
  &.none-active {
    li:first-child a {
      color: rgb(20, 20, 20);
    }
  }
`;

const NavLinkStyled = styled(Link)`
  color: rgb(100, 100, 100);
  font-size: 1rem;

  font-weight: bold;
  &.active {
    color: rgb(20, 20, 20);
  }
  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
`;

export default () => {
  const { page, posts } = useRouteData()
  return (
    <NavStyled
      vertical
      className={posts.url === `/${(page && page.slug) || ""}` && "none-active"}
    >
      {page &&
        page.slug &&
        page.subpages &&
        page.subpages.map((subpage, idx) => (
          <NavItem key={`submenu-${idx}`}>
            <NavLinkStyled to={`/${page.slug}/${subpage.slug}`}>
              {subpage.title}
            </NavLinkStyled>
          </NavItem>
        ))}
    </NavStyled>
  )
}
