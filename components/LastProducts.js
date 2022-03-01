import React from "react";
import Image from "next/image";

const LastProducts = ({ lastsPosts }) => {
  console.log(lastsPosts);
  return (
    <div>
      {lastsPosts.slice(0, 3).map((item, key) => {
        const { FoodTitle, FoodContent, foodCreatedAt, foodImage } =
          item.fields;

        return (
          <div key={key} className="flex flex-column mb-12">
            <div className="w-48">
              <Image
                alt={FoodTitle}
                src={foodImage[0].url}
                width={300}
                height={220}
                loading="eager"
                layout="responsive"
              />
            </div>
            <div className="w-7/12 ml-4 flex flex-col justify-center">
              <h1 style={{ color: "red" }}>{FoodTitle}</h1>
              <h6>{foodCreatedAt}</h6>
            </div>
          </div>
        );
        1;
      })}
    </div>
  );
};

export default LastProducts;
