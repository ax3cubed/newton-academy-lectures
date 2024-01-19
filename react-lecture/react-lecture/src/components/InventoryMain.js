import { useState } from "react";
import { ProductTable } from "./ProductTable";
import { Search } from "./Search";

export const InventoryMain = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState();
    const doFilter =(searchText,showIsStocked) =>{
        if (searchText == "" || showIsStocked == false) {
            setFilteredProducts(products)
        }
        else{
            /// TODO --- write logic to filter by product name and/or showIsStocked checkbox
             
        }
    }
  return (
    <div>
      <Search doFilter={doFilter}/>
      <ProductTable products={products} />
    </div>
  );
};
