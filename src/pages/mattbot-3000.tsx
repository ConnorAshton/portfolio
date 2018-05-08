import * as React from 'react'
import Link from 'gatsby-link'

import { MainBodyHolder } from '../components/component-main-body-holder'
import { ProjectHeaderImage } from '../components/ProjectPageComponents/component-project-header-image'
import { ProjectTitle } from '../components/ProjectPageComponents/component-project-title'
import { ProjectSubtitle } from '../components/ProjectPageComponents/component-project-subtitle'
import { ProjectSectionCard } from '../components/ProjectPageComponents/component-project-section-card'
import { ProjectImage } from '../components/ProjectPageComponents/component-project-image'
import { ProjectBodyWide } from '../components/ProjectPageComponents/component-project-body-wide'

import { Title, Subtitle, sh1, sh1body, sh2, sh2body, sh3, sh3body, wb1, sh4, sh4body, sh5, sh5body } from '../projects/mattbot'

const mattbotHeader = require('../assets/mattbot-project-header.png')
const mattbotOldInterface = require('../assets/mattbot-project-old-interface.png')
const mattbotUserRequirements = require('../assets/mattbot-project-user-requirements.png')
const mattbotUserFlow = require('../assets/mattbot-project-user-flow.png')
const mattbotUIDesigns = require('../assets/mattbot-project-ui-designs.png')

export default () => (
  <div>
      <ProjectHeaderImage headerImage={mattbotHeader}/>
    <MainBodyHolder>
      <ProjectTitle projectTitle={ Title }/>
      <ProjectSubtitle subtitle={ Subtitle }/>
      <ProjectSectionCard sectionTitle={sh1} sectionBody={sh1body}/>
      <ProjectSectionCard sectionTitle={sh2} sectionBody={sh2body}/>
      <ProjectSectionCard sectionTitle={sh3} sectionBody={sh3body}/>
    </MainBodyHolder>
    <ProjectImage image={mattbotOldInterface}/>
    <MainBodyHolder>
    <ProjectBodyWide bodyText={wb1}/>
    </MainBodyHolder>
    <ProjectImage image={mattbotUserRequirements}/>
    <ProjectImage image={mattbotUserFlow}/>
    <MainBodyHolder>
      <ProjectSectionCard sectionTitle={sh4} sectionBody={sh4body}/>
    </MainBodyHolder>
    <ProjectImage image={mattbotUIDesigns}/>
    <MainBodyHolder>
      <ProjectSectionCard sectionTitle={sh5} sectionBody={sh5body}/>
      <div style={{marginBottom: '158px'}}></div>
    </MainBodyHolder> 
  </div>
)