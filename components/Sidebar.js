import Categories from "./Categories";


const Sidebar = ({categories}) => {

  return (
    <div>
      
           <Categories categories={categories} />
       
    </div>
  )
}

export default Sidebar