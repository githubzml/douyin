import React, { Component } from 'react'
import { connect } from 'dva';



class FocusPage extends Component {
    render() {
       return(
            <div>this is focusPage</div>
       )
    }
}


export default connect()(FocusPage);



