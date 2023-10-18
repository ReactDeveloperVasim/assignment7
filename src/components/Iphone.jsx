import React, { useState } from "react";

export const Iphone = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState(" ");
  const [color, setColor] = useState(" ");
  const [price, setPrice] = useState(" ");

  return (
    <div>
      <table>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter Brand Name"
              onChange={(e) => setBrand(e.target.value)}
            />
          </td>
          <td>{brand}</td>
        </tr>
        <tr>
          <td>{model}</td>
          <td>
            <input
              type="text"
              placeholder="Enter Model Name"
              onChange={(e) => setModel(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter Color Name"
              onChange={(e) => setColor(e.target.value)}
            />
          </td>
          <td>{color}</td>
        </tr>
        <tr>
          <td>{`RS . ${price}`}</td>
          <td>
            <input
              type="text"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
