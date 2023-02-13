import { useSelector } from "react-redux";

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Header from './components/Header';
import PrivateRoutes from "./components/routes/PrivateRoutes";




function App() {

 const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="md:container mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
