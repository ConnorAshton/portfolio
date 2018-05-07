import * as React from 'react';
import { Container, Text } from './styles'

export class ProjectTitle extends React.PureComponent {
    render(){
        return(
            <Container>
                <Text>{ this.props.projectTitle }</Text>
            </Container>
        )
    }
}