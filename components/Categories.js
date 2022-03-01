import React from "react";
import Image from "next/image";

const Categories = ({ categories }) => {

  return (
    <div className="flex flex-row">
      {categories.map((item, index) => {
        const { CategoryName, categoryIcon } = item.fields;

        return (
          <div key={index} className="ml-12">
            <Image alt={CategoryName} src={categoryIcon[0].url} width={80} height={80} />
            <h3 className="text-3xl text-amber-600">{CategoryName}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
