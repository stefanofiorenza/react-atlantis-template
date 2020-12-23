import React from "react";
//Components
import { Content } from "../../../../components";

export default function Page({ Header }) {
  return (
    <div className="page-inner">
      <Header.Breadcrumb
        breadcrumb={[
          {
            name: "Blank Page 2",
            to: "/panel/blank/2",
          },
        ]}
        head="Blank Page"
      />
      <Content>Blank Page</Content>
    </div>
  );
}
