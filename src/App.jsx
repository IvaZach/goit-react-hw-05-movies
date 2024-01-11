import Home from "page/Home";
import NotFound from "page/NotFound";
import { Routes, Route } from "react-router-dom";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>


    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};