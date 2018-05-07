import * as React from 'react';
import { Container, Text } from './styles'

export class ProjectSubtitle extends React.PureComponent{
    render(){
        return(
            <Container>
                <Text>{ this.props.subtitle }</Text>
            </Container>
        )
    }
}