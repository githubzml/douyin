import React, { Component } from 'react';
import styles from "../routes/commandPage.scss"
import Img from "../assets/xixi.jpg"
import { Icon } from "antd"

export default class commandPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            color: "#fff",
            num: '0'
        }
    }

    handle = () => {
        this.setState({
            status: !this.state.status,
            color: this.state.status ? "#fff" : "red",
            num: this.state.status ? "0" : ".1"
        }, () => {
            console.log(this.state.color)
        })
    }
    render() {
        let { status, color, num } = this.state;
        console.log(status);
        return (
            <div className={styles.command}>
                <div className={styles.suspension}>
                    <Icon type="heart" theme="filled"
                        onClick={() => { this.handle() }}
                        style={{ fontSize: '34px', color: color }}
                    />
                    <span style={{ fontSize: '16px', color: '#fff' }}>
                        {8.5 + Number(num)}w
                    </span>
                    <Icon type="message" theme="filled" style={{ fontSize: '34px', color: '#fff' }} />
                    <span style={{ fontSize: '16px', color: '#fff' }}>585</span>
                    <Icon type="share-alt" theme="outlined" style={{ fontSize: '34px', color: '#fff' }} />
                    <span style={{ fontSize: '16px', color: '#fff' }}>1945</span>
                </div>
                <div className={styles.bg}>
                    <img src={Img} alt="" />
                </div>
            </div>
        )
    }
}
