import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.scss"
const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/category/:id",
        element: <div>Categories</div>,
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }


]);

function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
