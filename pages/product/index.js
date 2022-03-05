import React from "react";
import Head from "next/head";
import url from "../../public/url";
import Image from "next/image";
import Link from "next/link";

const Products = ({ lastsPosts }) => {

  // const {FoodImage,FoodContent,FoodMinutes,FoodPersons,FoodTitle} = lastsPosts;

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Our Products" />
      </Head>

      <h1 className="font-mono text-4xl text-orange-700 my-4 text-center">
        RECIPES
      </h1>

      <div className="container mx-auto py-16 flex flex-wrap justify-between px-6">
        {lastsPosts.map((product, index) => {
          const {
            foodImage,
            FoodContent,
            FoodMinutes,
            FoodPersons,
            FoodTitle,
            FoodCategotyId,
          } = product.fields;

          const id = product.id;

          return (
            <Link href={`product/${id}`} passHref key={index}>
              <div
                className="w-full my-16 sm:w-5/12 lg:w-3/12 lg:mr-4 w-96 border-2 border-solid	border-amber-700 mb-4 px-4 py-4 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <Image
                    src={foodImage[0].url}
                    height="80px"
                    width="100%"
                    layout="responsive"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-mono text-2xl text-orange-700 my-4">
                    {FoodTitle}
                  </h1>
                  <p className="text-base">{FoodContent.slice(0, 180)} [...]</p>
                </div>

                <div className="flex justify-between mt-8">
                  <h3 className="text-orange-700 my-4">
                    {FoodPersons} {FoodPersons == 1 ? "person" : "persons"}
                  </h3>
                  <h3 className="text-orange-700 my-4">
                    {FoodMinutes} minutes
                  </h3>
                </div>


              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const lastsPosts = await fetch(`${url}/items`);

  const responseLastsPosts = await lastsPosts.json();

  return {
    props: {
      lastsPosts: responseLastsPosts,
    },
  };
}
