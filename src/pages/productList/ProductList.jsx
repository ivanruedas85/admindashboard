import React, { useState } from "react";
import { PLCancel, PLContainer, PLEdit, PLImg, PLUser } from "./ProductListStyled";
import { DataGrid } from "@mui/x-data-grid";
import { ProductRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(ProductRows);

  const handleDElete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "products",
      headerName: "Products",
      width: 220,
      renderCell: (params) => {
        return (
          <PLUser>
            <PLImg src={params.row.img} alt="" />
            {params.row.name}
          </PLUser>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      neaderName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <PLEdit>Edit</PLEdit>
            </Link>
            <PLCancel onClick={() => handleDElete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <PLContainer>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </PLContainer>
  );
};

export default ProductList;
