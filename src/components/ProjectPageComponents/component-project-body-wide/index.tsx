import * as React from 'react';
import { Container, Text } from './styles'

export class ProjectBodyWide extends React.PureComponent{
    render(){
        return(
            <Container>
                <Text>{ this.props.bodyText }</Text>
            </Container>
        )
    }
}