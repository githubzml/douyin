div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    .img {
        width: 100%;
    }
}
{/* <div>
            <img src={Img} alt="" className="img"/>
          </div> */}
          <header className={styles.header}>
          <Icon type="search" theme="outlined" />
          <span>推荐</span>
          <span>北京</span>
          <Icon type="ellipsis" theme="outlined" />
        </header>
        <section className={styles.section}>
          <div className={styles.tanchuang}>
            <Icon type="heart" theme="outlined" />
            <Icon type="message" theme="outlined" />
            <Icon type="wechat" theme="outlined" />
          </div>
        </section>

<Router history={history}>
<Switch>
  <Redirect from="/" to="/HomeIndex" />
  <Route path="/HomeIndex" component={IndexPage}>
    <IndexRoute component={MainPage} />
    <Route path="/main" exact component={MainPage} />
    <Route path="/focus" exact component={FocusPage} />
    <Route path="/add" exact component={AddPage} />
    <Route path="/msg" exact component={MessagePage} />
    <Route path="/mine" exact component={MinePage} />
  </Route>

</Switch>
</Router>






/ .header {
   
  //     display: flex;
  //     justify-content: space-around;
  //     border-bottom: 1px solid #ccc;
  // }
  
  // .section {
  //     overflow-y: scroll;
  //     flex: 1;
  //     position: relative; // background: url("../assets/xixi.jpg") no-repeat;
  //     .tanchuang {
  //         position: absolute;
  //         right: 0;
  //         top: 45%;
  //     }
  // }
  
  // .footer {
  //     height: 46px;
  //     display: flex;
  //     justify-content: space-around;
  //     align-items: center;
  //     border-top: 1px solid #ccc;
  // }