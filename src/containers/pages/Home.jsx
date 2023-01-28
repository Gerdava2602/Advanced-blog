import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"

function Home(){
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