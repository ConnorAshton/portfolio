import * as React from 'react';
import { Container, Text } from './styles'

export class ContactTitle extends React.PureComponent {
    render(){
        return(
            <Container>
                <Text>
                    I’d love to hear from you 
                </Text>
            </Container>
        )
    }
}