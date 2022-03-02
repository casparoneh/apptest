import Categories from "./Categories";
import LastProducts from "./LastProducts";

const Sidebar = ({ categories, lastsPosts }) => {
  return (
    <>
      <div>
      <Categories categories={categories} />
      <div className="mt-12">
      <h1 className="font-mono text-2xl text-orange-700 text-center mb-4">Foods</h1>
        <LastProducts lastsPosts={lastsPosts} />
      </div>
    </div>
    </>
  
  );
};

export default Sidebar;
