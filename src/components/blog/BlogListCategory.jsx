import LoadingCart from "components/loaders/LoadingCart";
import CategoriesSmallSetPagination from "components/pagination/CategoriesPagination";
import { connect } from "react-redux";
import BlogCard from "./BlogCard";

function BlogListCategory({ get_blog_list_page, blog_list, count, category_id }) {

  return (
    <div>
      {blog_list ? (
        <>
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {blog_list.map((post, index) => {
                  return <BlogCard data={post} />;
                })}
              </div>
              <CategoriesSmallSetPagination
                get_blog_list_page={get_blog_list_page}
                blog_list={blog_list}
                count={count}
                category_id={category_id}
              />
            </div>
          </div>
        </>
      ) : (
        <LoadingCart />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
})(BlogListCategory);
