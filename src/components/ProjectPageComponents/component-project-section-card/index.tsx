import * as React from 'react';
import { Container, TitleHolder, BodyHolder, Title, BodyText } from './styles'

export class ProjectSectionCard extends React.PureComponent {
    render(){
        return(
            <Container>
                <TitleHolder>
                    <Title>{ this.props.sectionTitle }</Title>
                </TitleHolder>
                <BodyHolder>
                    <BodyText>{ this.props.sectionBody }</BodyText>
                </BodyHolder>
            </Container>
        )
    }
}