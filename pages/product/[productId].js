import React from "react";
import { useRouter } from "next/router";
import url from "../../utils/url";

const ProductDetails = ({ products }) => {
  //   const router = useRouter();
  const {FoodTitle} = products.fields;

  return <div>
    <h1>{FoodTitle}</h1>
  </div>;
};

export default ProductDetails;

export async function getStaticPaths() {

  const response = await fetch(`${url}/items`);

  const data = await response.json();

  const paths = data.map(food => {
    return {
      params: {
        productId: `${food.id}`
      }
    }
  })

  return {
    paths: paths,
    fallback: false,
  }

  // return {
  //   paths: [
  //     {
  //       params: { productId: "recCvvF4t37QfTJ2M" },
  //     },
  //     {
  //       params: { productId: "recDkEFucLaaJF90c" },
  //     },
  //   ],
  //   fallback: false,
  // };
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
