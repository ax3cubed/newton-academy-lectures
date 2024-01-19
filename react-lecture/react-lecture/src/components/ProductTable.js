import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ products = [] }) => {
 const rows =[];
 var lastCategory = null;
 products.forEach((product) => {
    if (product.category !== lastCategory) {
        rows.push(
            <ProductCategoryRow
            category={product.category}
            key={product.category} />
        )
    }
    rows.push(
        <ProductRow product={product} key={product.name}/>
    );
    lastCategory= product.category
 })

//   const categories = [...new Set(products.map((product) => product.category))];

//   const LoadProductComponentByCategory = ({ categoryParam }) => {
//     const productsByCategory = products.filter(
//       ({ category }) => category == categoryParam
//     );
//     return (
//         <>
//         {
//             productsByCategory.map((product) =>   <ProductRow product={product} key={product.name}/>)
//         }
       
//         </>
       
//     )
//   };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </table>
  );
};
