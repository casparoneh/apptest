import Categories from "./Categories";
import LastProducts from "./LastProducts";

const Sidebar = ({ categories, lastsPosts }) => {
  return (
    <div>
      <Categories categories={categories} />
      <div className="mt-8">
        <LastProducts lastsPosts={lastsPosts} />
      </div>
    </div>
  );
};

export default Sidebar;
