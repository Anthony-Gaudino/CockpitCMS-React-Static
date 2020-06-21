import React from "react";
import { useRouteData } from "react-static";

import Metatags from "../components/Metatags";
import PostBanner from "../components/PostBanner";
import PostComponents from "../components/PostComponents";

export default () => {
  const { post } = useRouteData()
  return (
    <article>
      <Metatags title={post.title} />
      <PostBanner
        title={post.title}
        summary={post.summary}
        image={post.image}
        categories={
          (post.categories && post.categories.map(category => category.name)) ||
          []
        }
      />
      <PostComponents components={post.components || []} />
    </article>
  );
};
