import { shopItems } from "../../data/data";

const TableOptions = () => {
  const table = shopItems[0];

  return (
    <div>
      {/* length */}
      <label>Length</label>
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
      <label>Width</label>
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
      <label>Wood Type</label>
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
      <label>Finish</label>
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
      <label>Leaf Extension</label>
      <select>
        <option>No</option>;
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
