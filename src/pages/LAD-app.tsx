import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { ProjectHeaderImage } from '../components/ProjectPageComponents/component-project-header-image'
import { ProjectTitle } from '../components/ProjectPageComponents/component-project-title'
import { ProjectSubtitle } from '../components/ProjectPageComponents/component-project-subtitle'
import { ProjectSectionCard } from '../components/ProjectPageComponents/component-project-section-card'
import { ProjectImage } from '../components/ProjectPageComponents/component-project-image'
import { ProjectBodyWide } from '../components/ProjectPageComponents/component-project-body-wide'

import { Title, Subtitle, sh1, sh1body, sh2, sh2body, sh3, sh3body, sh4, sh4body, sh5, sh5body, sh6, sh6body, sh7, sh7body, sh8, sh8body, sh9, sh9body } from '../projects/ladapp'

const ladappHeader = require('../assets/ladapp-project-header.png')
const ladappScreenshot = require('../assets/ladapp-project-screenshots.png')
const ladappAppStore = require('../assets/ladapp-project-appstore.png')

export default () => (
  <div>
      <ProjectHeaderImage headerImage={ladappHeader}/>
    <MainBodyHolder>
        <ProjectTitle projectTitle={ Title }/>
        <ProjectSubtitle subtitle={ Subtitle }/>
        <ProjectSectionCard sectionTitle={sh1} sectionBody={sh1body}/>
        <ProjectSectionCard sectionTitle={sh2} sectionBody={sh2body}/>
        <ProjectSectionCard sectionTitle={sh3} sectionBody={sh3body}/>
        <ProjectSectionCard sectionTitle={sh4} sectionBody={sh4body}/>
        <ProjectSectionCard sectionTitle={sh5} sectionBody={sh5body}/>
        <ProjectSectionCard sectionTitle={sh6} sectionBody={sh6body}/>
    </MainBodyHolder>
    <ProjectImage image={ladappScreenshot}/>
    <MainBodyHolder>   
        <ProjectSectionCard sectionTitle={sh7} sectionBody={sh7body}/>
        <ProjectSectionCard sectionTitle={sh8} sectionBody={sh8body}/>
        <ProjectSectionCard sectionTitle={sh9} sectionBody={sh9body}/>
    </MainBodyHolder>    
    <ProjectImage image={ladappAppStore}/>
  </div>
)