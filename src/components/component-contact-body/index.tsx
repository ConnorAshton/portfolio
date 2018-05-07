import * as React from 'react';
import { Container, Text, HighlightedText } from './styles'

export class ContactBody extends React.PureComponent {
    render(){
        return(
            <Container>
                <Text>I’m always open to ideas and interesting companies with products to work on.{'\n'}
                {'\n'} 
                You can reach me at {'\n'}
                <HighlightedText>ConnorAshton.D@gmail.com</HighlightedText>
                </Text>
            </Container>
        )
    }
}