import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get_blog_search_results } from "redux/actions/blog";
import SearchBlogList from "components/blog/SearchBlogList";

function Search({ get_blog_search_results, posts }) {
  const params = useParams();
  const term = params.term;

  useEffect(() => {
    get_blog_search_results(term);
  },[]);

  return (
    <FullWidthLayout>
      <SearchBlogList blog_list={posts}/>
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  posts: state.blog.filtered_posts,
});

export default connect(mapStateToProps, {
  get_blog_search_results,
})(Search);
