import React, { Component } from 'react'
import { connect } from 'dva';



class MessagePage extends Component {
    render() {
       return(
            <div>this is MessagePage</div>
       )
    }
}


export default connect()(MessagePage);



