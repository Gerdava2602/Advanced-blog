import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "containers/pages/blog/BlogPost";
import Blog from "containers/pages/blog/Blog";
import BlogCategory from "containers/pages/category/BlogCategory";
import Search from "containers/pages/blog/Search";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/post/:slug" element={<BlogPost />} />
          <Route path="/Blog/categories/:category_id" element={<BlogCategory />} />
          <Route path="/search/:term" element={<Search />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
