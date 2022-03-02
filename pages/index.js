import React from "react";
import url from "../utils/url";

const HomePage = ({ foods }) => {
  return (
    <div>
      {foods.map((item, key) => {
        const { FoodTitle, FoodContent } = item.fields;

        return (
          <div key={key} style={{ marginBottom: 40 }}>
            <h1 className="font-mono text-2xl text-orange-700">{FoodTitle}</h1>
            <h6>{FoodContent}</h6>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {

  const data = await fetch(`${url}/items`);

  const response = await data.json();

  return {
    props: {
      foods: response,
    },
  };
}
