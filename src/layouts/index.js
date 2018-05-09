import * as React from 'react';
import Helmet from 'react-helmet';

import { Viewport } from '../components/component-viewport'
import { NavBar } from '../components/component-nav-bar'

export default ({ children }) => (
  <Viewport>
    <Helmet title='Connor Ashton - Product Designer and Developer'></Helmet>
    <NavBar />
    {children()}
  </Viewport>
)
