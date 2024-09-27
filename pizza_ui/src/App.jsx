import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Main from "./ui/Main";
import PageNotFound from "./ui/PageNotFound";
import Home from "./pages/customer/Home";
import Order from "./pages/customer/Order";
import Detail from "./pages/customer/Detail";
import Auth from "./pages/customer/Auth";
import Register from "./pages/admin/Register";
import AddAdmin from "./pages/admin/AddAdmin";
import Orders from "./pages/admin/Orders";
import AddMenu from "./pages/admin/AddMenu";
import Role from "./pages/admin/Role";
import User from "./pages/admin/User";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/orders" element={<Order />} />
          <Route path="/pizza/:id" element={<Detail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<User />} />
          <Route path="/role" element={<Role />} />
          <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/add-orders" element={<Orders/>} />
          <Route path="/add-menu" element={<AddMenu/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
