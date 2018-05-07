import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { ContactTitle } from '../components/component-contact-title'
import { ContactBody } from '../components/component-contact-body'

export default () => (
  <div>
    <MainBodyHolder>
        <ContactTitle/>
        <ContactBody />
    </MainBodyHolder>
  </div>
)