import * as React from 'react';
import { Viewport } from '../components/component-viewport'
import { NavBar } from '../components/component-nav-bar'

export default ({ children }) => (
  <Viewport>
    <NavBar />
    {children()}
  </Viewport>
)
