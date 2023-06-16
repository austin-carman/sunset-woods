import { shopItems } from "../../data/data";

const TableOptions = () => {
  const table = shopItems[0];

  return (
    <div>
      <select>
        {table.options.length.map((option, index) => {
          return (
            <option key={index}>
              {option.inches}&ldquo;{" "}
              {option.addedCost > 0 && `+$${option.addedCost}`}
            </option>
          );
        })}
      </select>
      <select>
        {table.options.width.map((option, index) => {
          return (
            <option key={index}>
              {option.inches}&ldquo;{" "}
              {option.addedCost > 0 && `+$${option.addedCost}`}
            </option>
          );
        })}
      </select>
      <div>Wood Type</div>
      <div>Leaf Extension</div>
      <div>Quantity</div>
    </div>
  );
};

export default TableOptions;
