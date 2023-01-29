import BlogCategories from "components/blog/BlogCategories"
import BlogList from "components/blog/BlogList"
import Header from "components/blog/Header"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"

function Blog(){

    return(
        <div>
            <FullWidthLayout>
                <Header/>
                <BlogCategories/>
                <BlogList/>
            </FullWidthLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {
})(Blog)