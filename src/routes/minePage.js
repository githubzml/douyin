import React, { Component } from 'react'
import { connect } from 'dva';



class MinePage extends Component {
    render() {
       return(
            <div>this is MinePage</div>
       )
    }
}


export default connect()(MinePage);



