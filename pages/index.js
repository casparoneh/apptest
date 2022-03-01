import React from "react";

const HomePage = ({ foods }) => {
  return (
    <div>
      {foods.map((item, key) => {
        const { FoodTitle, FoodContent } = item.fields;

        return (
          <div key={key} style={{ marginBottom: 40 }}>
            <h1 style={{ color: "red" }}>{FoodTitle}</h1>
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
  const data = await fetch("http://localhost:3000/api/items");

  const response = await data.json();

  return {
    props: {
      foods: response,
    },
  };
}