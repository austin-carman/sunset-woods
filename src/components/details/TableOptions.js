import { shopItems } from "../../data/data";

const TableOptions = () => {
  const table = shopItems[0];

  return (
    <div>
      {/* length */}
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
      {/* width */}
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
      {/* wood type */}
      <select>
        {table.options.woodType.map((option, index) => {
          return (
            <option key={index}>
              {option.type} {option.addedCost > 0 && `+$${option.addedCost}`}
            </option>
          );
        })}
      </select>
      {/* Finish */}
      <select>
        {table.options.finish.map((option, index) => {
          return (
            <option key={index}>
              {option.type} {option.addedCost > 0 && `+$${option.addedCost}`}
            </option>
          );
        })}
      </select>
      {/* Leaf Extension */}
      <select>
        {table.options.leafExtension.map((option, index) => {
          return (
            <option key={index}>
              {option.inches}&ldquo;{" "}
              {option.addedCost > 0 && `+$${option.addedCost}`}
            </option>
          );
        })}
      </select>
      <div>Quantity</div>
    </div>
  );
};

export default TableOptions;
