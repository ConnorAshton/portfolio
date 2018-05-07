import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { ProjectHeaderImage } from '../components/ProjectPageComponents/component-project-header-image'
import { ProjectTitle } from '../components/ProjectPageComponents/component-project-title'
import { ProjectSubtitle } from '../components/ProjectPageComponents/component-project-subtitle'
import { ProjectSectionCard } from '../components/ProjectPageComponents/component-project-section-card'
import { ProjectImage } from '../components/ProjectPageComponents/component-project-image'
import { ProjectBodyWide } from '../components/ProjectPageComponents/component-project-body-wide'

import { Title, Subtitle, sh1, sh1body, sh2, sh2body, sh3, sh3body, wb1, wb2, sh4, sh4body, sh5, sh5body, sh6, sh6body } from '../projects/nebula-live'

const nebulaHeader = require('../assets/nebula-project-header.png')
const nebulaUIDesigns = require('../assets/nebula-project-ui.png')
const nebulaUserInterview = require('../assets/nebula-project-interview.png')
const nebulaAppStore = require('../assets/nebula-project-app-store.png')

export default () => (
  <div>
      <ProjectHeaderImage headerImage={nebulaHeader}/>
    <MainBodyHolder>
      <ProjectTitle projectTitle={ Title }/>
      <ProjectSubtitle subtitle={ Subtitle }/>
      <ProjectSectionCard sectionTitle={sh1} sectionBody={sh1body}/>
      <ProjectSectionCard sectionTitle={sh2} sectionBody={sh2body}/>
      <ProjectSectionCard sectionTitle={sh3} sectionBody={sh3body}/>
    </MainBodyHolder>
    <ProjectImage/>
    <MainBodyHolder>
    <ProjectBodyWide bodyText={wb1}/>
    </MainBodyHolder>
    <ProjectImage/>
    <MainBodyHolder>
      <ProjectBodyWide bodyText={wb2}/>
      <ProjectSectionCard sectionTitle={sh4} sectionBody={sh4body}/>
    </MainBodyHolder>
    <ProjectImage image={nebulaUIDesigns}/>
    <MainBodyHolder>
      <ProjectSectionCard sectionTitle={sh5} sectionBody={sh5body}/>
      <ProjectImage image={nebulaUserInterview}/>
      <ProjectSectionCard sectionTitle={sh6} sectionBody={sh6body}/>
    </MainBodyHolder>
    <ProjectImage image={nebulaAppStore}/>
    
    
  </div>
)