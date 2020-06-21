import React from "react";
import { useRouteData } from "react-static";

import Metatags from "../components/Metatags";
import PageComponents from "../components/PageComponents";

export default () => {
  const { page } = useRouteData();
  return (
    <article>
      <Metatags title={page.title} pageDescription={page.description} />
      <PageComponents components={page.components || []} />
    </article>
  );
}
