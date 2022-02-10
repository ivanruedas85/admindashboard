import React, { useState } from "react";
import {
  UserListContent,
  UserListImg,
  UserListUser,
  UserListEdit,
  UserListCancel,
} from "./UserListStyled";
import { DataGrid } from "@mui/x-data-grid";
import { UserRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserListPages = () => {
  const [data, setData] = useState(UserRows);

  const handleDElete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "user",
      headerName: "User",
      width: 220,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      neaderName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListEdit>Edit</UserListEdit>
            </Link>
            <UserListCancel onClick={() => handleDElete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <UserListContent>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </UserListContent>
    </>
  );
};

export default UserListPages;
