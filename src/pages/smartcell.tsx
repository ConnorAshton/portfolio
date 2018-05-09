import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { ProjectHeaderImage } from '../components/ProjectPageComponents/component-project-header-image'
import { ProjectTitle } from '../components/ProjectPageComponents/component-project-title'
import { ProjectSubtitle } from '../components/ProjectPageComponents/component-project-subtitle'
import { ProjectSectionCard } from '../components/ProjectPageComponents/component-project-section-card'
import { ProjectImage } from '../components/ProjectPageComponents/component-project-image'
import { ProjectBodyWide } from '../components/ProjectPageComponents/component-project-body-wide'

import { Title, Subtitle, sh1, sh1body, sh2, sh2body, sh3, sh3body, wb1, sh4, sh4body, sh5, sh5body, sh6, sh6body, sh7, sh7body } from '../projects/smartcell'

const smartcellHeader = require('../assets/smartcell-project-header.png')
const smartcellStartupWeekend = require('../assets/smartcell-project-startupweekend.png')
const smartcellDesignProcess = require('../assets/smartcell-project-design-process.png')
const smartcellDesigns = require('../assets/smartcell-project-designs.png')
const smartcellAwards = require('../assets/smartcell-project-awards.png')

export default () => (
  <div>
      <ProjectHeaderImage headerImage={smartcellHeader}/>
    <MainBodyHolder>
      <ProjectTitle projectTitle={ Title }/>
      <ProjectSubtitle subtitle={ Subtitle }/>
      <ProjectSectionCard sectionTitle={sh1} sectionBody={sh1body}/>
      <ProjectSectionCard sectionTitle={sh2} sectionBody={sh2body}/>
    </MainBodyHolder>
    <ProjectImage image={smartcellStartupWeekend}/>
    <MainBodyHolder>
      <ProjectSectionCard sectionTitle={sh3} sectionBody={sh3body}/>
      <ProjectSectionCard sectionTitle={sh4} sectionBody={sh4body}/>
    </MainBodyHolder>
    <ProjectImage image={smartcellDesignProcess}/>
    <MainBodyHolder>
      <ProjectBodyWide bodyText={wb1}/>
      <ProjectSectionCard sectionTitle={sh5} sectionBody={sh5body}/>
      <ProjectSectionCard sectionTitle={sh6} sectionBody={sh6body}/>
    </MainBodyHolder>
    <ProjectImage image={smartcellDesigns}/>
    <MainBodyHolder>
      <ProjectSectionCard sectionTitle={sh7} sectionBody={sh7body}/>
    </MainBodyHolder> 
    <ProjectImage image={smartcellAwards}/>
  </div>
)