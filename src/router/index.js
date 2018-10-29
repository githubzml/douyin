import React from 'react';

import Tab from '../routes/IndexPage';

import MainPage from '../routes/mainPage';
import FocusPage from '../routes/focusPage';
import AddPage from '../routes/addPage';
import MsgPage from '../routes/messagePage';
import MinePage from '../routes/minePage';

import CommandPage from "../routes/commandPage"
import BeijingPage from "../routes/beijingPage"
export default {
  routes: [{
    path: '/tab',
    component: Tab,
    children: [{
      path: '/tab/shouye/command',
      component: MainPage,
      children: [{
        path: '/tab/shouye/command',
        component: CommandPage,
      },{
        path: '/tab/shouye/beijing',
        component: BeijingPage,
      }]
    },
    {
      path: '/tab/focus',
      component: FocusPage
    },
    {
      path: '/tab/tianjia',
      component: AddPage
    },
    {
      path: '/tab/msg',
      component: MsgPage
    },
    {
      path: '/tab/mine',
      component: MinePage
    }]
  }]
}
