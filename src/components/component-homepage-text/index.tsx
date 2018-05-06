import * as React from 'react';
import { Container, TextContainer, HomeText, HighlightedText } from './styles'

export class HomepageText extends React.PureComponent {

    render(){
        return(
            <Container>
                <TextContainer>
                    <HomeText> Hi I’m Connor, a <HighlightedText>Product Designer</HighlightedText> and iOS Developer 
                    currently working at the LADbible Group.
                    </HomeText>
                </TextContainer>
            </Container>
        )
    }

}