import React from "react";
import { useRouter } from "next/router";
import url from "../../public/url";

const ProductDetails = ({ products }) => {
  //   const router = useRouter();
  const { FoodTitle } = products.fields;

  return (
    <div>
      <h1>{FoodTitle}</h1>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const response = await fetch(`${url}/items`);

  const data = await response.json();


  return {
    paths: data.map((food) => {
      return {
        params: {
          productId: food.id,
        },
      };
    }),
    fallback: false,
  };

  
  

}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(`${url}/items/${params.productId}`);

  console.log("RESPONSI 123123123 " + response);

  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
