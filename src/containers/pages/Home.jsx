import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"

function Home(){

    useEffect(()=> {
        get_blog_list()
    }, [])

    return(
        <div>
            <FullWidthLayout>
                Home
            </FullWidthLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {
})(Home)