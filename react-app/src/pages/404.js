import React from "react";
import { useRouteData } from "react-static";
//
import Metatags from "../components/Metatags";
import Components404 from "../components/404Components";


const Page404 = () => {
  const { page } = useRouteData()
  return (
    <article>
      <Metatags title={page.title} pageDescription={page.description} />
      <Components404 components={page.components || []} />
    </article>
  )
}

export default Page404;
