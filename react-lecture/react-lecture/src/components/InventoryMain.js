import { ProductTable } from "./ProductTable";
import { Search } from "./Search";

export const InventoryMain = ({ products }) => {
  return (
    <div>
      <Search />
      <ProductTable products={products} />
    </div>
  );
};
