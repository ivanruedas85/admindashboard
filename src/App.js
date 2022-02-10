import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import { ContainerApp } from "./content/AppStyled";
import HomePages from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPages from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUserPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <ContainerApp>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/users" element={<UserListPages />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productsId" element={<Product />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
        </Routes>
      </ContainerApp>
    </Router>
  );
}

export default App;
