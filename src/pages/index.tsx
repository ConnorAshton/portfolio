import * as React from 'react'
import Link from 'gatsby-link'

import { Viewport } from '../components/component-viewport'
import { MainBodyHolder } from '../components/component-main-body-holder'
import { HomepageText } from '../components/component-homepage-text'
import { ProjectCard } from '../components/component-project-card'
import { DesignGrid } from '../components/component-design-grid'
import { DesignCard } from '../components/component-design-card'

const ladAppImage = require('../assets/lad-app.png')
const luxModernImage = require('../assets/lux-modern-app.png')
const fortyWinksImage = require('../assets/40-winks-app.png')
const babbelImage = require('../assets/babbel-app.png')
const nebulaImage = require('../assets/nebula-app.png')
const drizzleApp = require('../assets/drizzle-app.png')
const smartCell = require('../assets/smartcell-app.png')
const mattBot = require('../assets/mattbot-app.png')

const design1 = require('../assets/design-1.png')
const design2 = require('../assets/design-2.png')
const design3 = require('../assets/design-3.png')
const design4 = require('../assets/design-4.png')
const design5 = require('../assets/design-5.png')
const design6 = require('../assets/design-6.png')
const design7 = require('../assets/design-7.png')
const design8 = require('../assets/design-8.png')
const design9 = require('../assets/design-9.png')

export default () => (
      <div>
            <MainBodyHolder> 
                  <HomepageText/>
                  <Link to="/LAD-app/">
                  <ProjectCard image={ladAppImage} />
                  </Link>
                  <Link to="/mattbot-3000/">
                  <ProjectCard image={mattBot} />
                  </Link>
                  <Link to="/nebula-live/">
                  <ProjectCard image={nebulaImage} />
                  </Link>
                  <Link to ="/smartcell/">
                  <ProjectCard image={smartCell} />
                  </Link>    
                  <ProjectCard image={luxModernImage} />
                  <ProjectCard image={fortyWinksImage} />
                  <ProjectCard image={babbelImage} />            
                  <ProjectCard image={drizzleApp}/>                           
                  <DesignGrid>
                        <DesignCard image={design1}/>
                        <DesignCard image={design2}/>
                        <DesignCard image={design3}/>
                        <DesignCard image={design4}/>
                        <DesignCard image={design5}/>
                        <DesignCard image={design6}/>
                        <DesignCard image={design7}/>
                        <DesignCard image={design8}/>
                        <DesignCard image={design9}/>
                  </DesignGrid>
            </MainBodyHolder>
      </div>
)
