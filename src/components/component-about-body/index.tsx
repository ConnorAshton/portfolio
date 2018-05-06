import * as React from 'react';
import { Container, Text, HighlightedText } from './styles';

export class AboutBody extends React.PureComponent {
    render() {
        return(
            <Container>
                <Text>
                Hi I’m Connor, a <HighlightedText>Product Designer</HighlightedText> and iOS Developer 
                currently working at the LADbible Group. {'\n'}
                {'\n'}
                I believe my varied background all turn into strengths when designing a product, my role as a Business Development Consultant has given me insight into the mindset of the business and the business goals and concerns. {'\n'}
                {'\n'}
                My background as an iOS Developer means I understand the technicalities of what is being designed and can better speak with engineers. I understand and factor in code complexity, developer time, and feasibility into what I design. I make sure the handoff of design work is exactly what the engineer needs.
                </Text>
            </Container>
        )
    }
}