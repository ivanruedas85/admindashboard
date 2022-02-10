import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {
  ProductContainer,
  ProductTitleContainer,
  ProductTitle,
  ProductAdd,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductBottom,
  ProductInfoTop,
  ProductInfoBottom,
  ProductInfoImg,
  ProductInfoName,
  ProductInfoItem,
  ProductInfoKey,
  ProductInfoValue,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
  ProductUpload,
  ProductFormImg,
  ProductFormButton,
} from "./ProductStyled";
import { ProductData } from "../../dummyData";
import { MdPublish } from "react-icons/md";

const Product = () => {
  return (
    <ProductContainer>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <ProductAdd>Create</ProductAdd>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={ProductData} datakey='Sales' title='Sales performance' />
        </ProductTopLeft>
        <ProductTopRight>
            <ProductInfoTop>
                <ProductInfoImg src='https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                <ProductInfoName>Apple Airpods</ProductInfoName>
            </ProductInfoTop>
            <ProductInfoBottom>
                <ProductInfoItem>
                    <ProductInfoKey>id:</ProductInfoKey>
                    <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>sales:</ProductInfoKey>
                    <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>active:</ProductInfoKey>
                    <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>in stock</ProductInfoKey>
                    <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
            </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
          <ProductForm>
              <ProductFormLeft>
                  <label htmlFor="">Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label htmlFor="">In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label htmlFor="">Active</label>
                  <select name="active" id="Active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </ProductFormLeft>
              <ProductFormRight>
                  <ProductUpload>
                    <ProductFormImg src='https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                    <label for="file">
                        <MdPublish />
                    </label>
                    <input type="file" id="file" style={{display: 'none'}} />
                  </ProductUpload>
                  <ProductFormButton>Update</ProductFormButton>
              </ProductFormRight>
          </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};

export default Product;
