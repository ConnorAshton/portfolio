import * as React from 'react'
import Link from 'gatsby-link'

import { Viewport } from '../components/component-viewport'
import { MainBodyHolder } from '../components/component-main-body-holder'
import { HomepageText } from '../components/component-homepage-text'

export default () => (
      <div>
            <MainBodyHolder> 
                  <HomepageText/>
            </MainBodyHolder>
      </div>
)
