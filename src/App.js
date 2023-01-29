import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "containers/pages/blog/BlogPost";
import Blog from "containers/pages/blog/Blog";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/post/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
