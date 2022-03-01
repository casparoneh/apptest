import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const About = ({ about, categories, lastsPosts }) => {
  const { MainImage, Title, firstPartContent, secondPartContent, subTitle } =
    about[0].fields;

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Awesome Content for Food" />
      </Head>

      
      <div className="container mx-auto flex 	flex-wrap">
        <div className="w-8/12">
          <h1 className="font-mono text-2xl text-orange-700">{Title}</h1>

          <p className="text-gray-700 my-4 text-justify">{firstPartContent}</p>

          <div style={{ display: "block" }}>
            <Image
              src={MainImage[0].url}
              alt="Sunset"
              width={600}
              height={450}
              loading="eager"
              layout="responsive"
            />
          </div>

          <p className="font-mono text-2xl text-orange-700 mt-12">{subTitle}</p>

          <p className="text-justify text-gray-700 my-4">{secondPartContent}</p>
        </div>
        <div className="p-8 flex-1 h-screen ">
          <h1 className="font-mono text-2xl text-orange-700 text-center mb-4">
            Categories
          </h1>

          <Sidebar categories={categories} lastsPosts={lastsPosts} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/about");
  const categories = await fetch("http://localhost:3000/api/categories");
  const lastsPosts = await fetch("http://localhost:3000/api/items");

  const response = await data.json();
  const categoriesResponse = await categories.json();
  const responseLastsPosts = await lastsPosts.json();

  return {
    props: {
      about: response,
      categories: categoriesResponse,
      lastsPosts: responseLastsPosts,
    },
  };
}

export default About;
