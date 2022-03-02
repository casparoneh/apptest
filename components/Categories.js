import React from "react";
import Image from "next/image";

const Categories = ({ categories }) => {

  return (
    <div className="flex flex-row">
      {categories.map((item, index) => {
        const { CategoryName, categoryIcon } = item.fields;

        return (
          <div key={index} className="ml-12">
            <Image alt={CategoryName} src={categoryIcon[0].url} width="100px" height="100px"  />
            <h1 className="text-3xl text-amber-600">{CategoryName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
