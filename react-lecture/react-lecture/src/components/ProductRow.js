export const ProductRow = ({ product }) => {
  const name =
    product.qty != 0 ? (
      product.name
    ) : (
      <span
        style={{
          color: "red",
        }}
      >
        {product.name}
      </span>
    );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
