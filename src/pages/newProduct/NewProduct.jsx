import React from "react";
import {
  NPButton,
  NPContainer,
  NPForm,
  NPItem,
  NpTitle,
} from "./NewProductStyled";

const NewProduct = () => {
  return (
    <NPContainer>
      <NpTitle>New Products</NpTitle>
      <NPForm>
        <NPItem>
          <label htmlFor="">Image</label>
          <input type="file" id="file" />
        </NPItem>
        <NPItem>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </NPItem>
        <NPItem>
          <label htmlFor="">Stock</label>
          <input type="Stock" placeholder="123" />
        </NPItem>
        <NPItem>
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <optiom value="yes">Yes</optiom>
            <optiom value="No">No</optiom>
          </select>
        </NPItem>
        <NPButton>Create</NPButton>
      </NPForm>
    </NPContainer>
  );
};

export default NewProduct;
