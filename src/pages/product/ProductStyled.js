import styled from "styled-components";

export const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

export const ProductAdd = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #20dad8;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const ProductTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductTopLeft = styled.div`
  flex: 1;
`;

export const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
`;

export const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
`;

export const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

export const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductInfoName = styled.span`
  font-weight: 600;
`;

export const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoKey = styled.span`
  color: #78767c;
`;

export const ProductInfoValue = styled.span`
  font-weight: 300;
`;

export const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

export const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-bottom: 10px;
        color: gray;
    }
    input{
        margin-bottom:10px;
        border: none;
        padding: 5px;
        border-bottom; 1px solid gray;
    }
    select{
        margin-bottom:10px;
    }
`;

export const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductFormImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

export const ProductFormButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`;
