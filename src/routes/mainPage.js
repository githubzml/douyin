import React, { Component } from 'react'
import styles from "./mainPage.scss"
import { NavLink } from "dva/router";
import RouterView from '../router/routerView';
import { Icon } from "antd"

export default class MainPage extends Component {
    render() {
        return (
            <div className={styles.main}>
                <header>
                    <Icon type="search" theme="outlined" />
                    <div>
                        <NavLink to="/tab/shouye/command">推荐</NavLink>
                        <NavLink to="/tab/shouye/beijing">北京</NavLink>
                    </div>
                    <div>
                        <Icon type="scan" theme="outlined" />
                        <Icon type="ellipsis" theme="outlined" />
                    </div>
                </header>
                <div>
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
                
               
            </div>
        )
    }
}
