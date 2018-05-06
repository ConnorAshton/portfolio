import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { Avatar } from '../components/component-avatar'
import { AboutHeader } from '../components/component-about-header'
import { AboutBody } from '../components/component-about-body'

export default () => (
  <div>
    <MainBodyHolder>
      <Avatar/>
      <AboutHeader />
      <AboutBody />
    </MainBodyHolder>
  </div>
)
