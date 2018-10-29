import React, { Component } from 'react'
import { connect } from 'dva';



class AddPage extends Component {
    render() {
       return(
            <div>this is AddPage</div>
       )
    }
}


export default connect()(AddPage);



