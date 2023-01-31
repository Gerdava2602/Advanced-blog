import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogListCategory from "components/blog/BlogListCategory";
import { get_blog_list_category, get_blog_list_category_page } from "redux/actions/blog";

function BlogCategory({ get_blog_list_category, blog_list, count, get_blog_list_category_page }) {
  const params = useParams();
  const category_id = params.category_id;

  useEffect(() => {
    get_blog_list_category(category_id);
  }, []);
  console.log(blog_list);
  return (
    <FullWidthLayout>
      <BlogListCategory
        blog_list={blog_list && blog_list}
        count={count && count}
        get_blog_list_page={get_blog_list_category_page}
        category_id={category_id}
      />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  blog_list: state.blog.blog_list_category,
  count: state.blog.count,
});

export default connect(mapStateToProps, {
  get_blog_list_category,
  get_blog_list_category_page,
})(BlogCategory);
