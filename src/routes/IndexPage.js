import React, { Component } from 'react';
import { NavLink } from "dva/router";

import RouterView from '../router/routerView';
import styles from "../routes/IndexPage.scss"
export default class TabPage extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <section className={styles.section}>
          <RouterView routes={this.props.routes}></RouterView>
        </section>
        <footer className={styles.footer}>
          <NavLink to="/tab/shouye/command">首页</NavLink>
          <NavLink to="/tab/focus">关注</NavLink>
          <NavLink to="/tab/tianjia">+</NavLink>
          <NavLink to="/tab/msg">消息</NavLink>
          <NavLink to="/tab/mine">我的</NavLink>
        </footer>
      </div>
    )
  }
}
