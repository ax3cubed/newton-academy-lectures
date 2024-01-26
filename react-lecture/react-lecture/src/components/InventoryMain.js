import { useState } from "react";
import { ProductTable } from "./ProductTable";
import { Search } from "./Search";

export const InventoryMain = ({ products = [] }) => {
    const [searchText, setSearchText] = useState("");
    const [showOnlyProductInStock, setShowOnlyProductInStock] = useState(false);

  return (
    <div>
      <Search OnSearchTextChange={setSearchText} OnProductInStockChange={setShowOnlyProductInStock} searchText={searchText} showOnlyProductInStock={showOnlyProductInStock} />
      <ProductTable searchText={searchText} showOnlyProductInStock={showOnlyProductInStock} products={products} />
    </div>
  );
};
