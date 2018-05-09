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
                I’ve previously worked as a Business Development Executive and an iOS Developer which have both helped forge my path into becoming a Product Designer. What might initially seem quite varied is actually tied together by a common theme: building a great product that both users love and meets the business needs. {'\n'}
                {'\n'}
                My background as an iOS Developer means I understand the technicalities of what is being designed and can better speak with engineers. I understand and factor in code complexity, developer time, and feasibility into what I design. I make sure the handoff of design work is exactly what the engineer needs.
                </Text>
            </Container>
        )
    }
}