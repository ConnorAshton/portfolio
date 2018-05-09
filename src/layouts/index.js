import * as React from 'react';
import Helmet from 'react-helmet';

import { Viewport } from '../components/component-viewport'
import { NavBar } from '../components/component-nav-bar'

export default ({ children }) => (
  <Viewport>
    <Helmet title='Connor Ashton - Product Designer and Developer'
      meta name="viewport" content="width=device-width, initial-scale=1">
    </Helmet>
    <NavBar />
    {children()}
  </Viewport>
)
