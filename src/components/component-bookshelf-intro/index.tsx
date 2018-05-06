import * as React from 'react';
import { Container, TextContainer, Text } from './styles';

export class BookshelfIntro extends React.PureComponent {
    render(){
        return(
            <Container>
                <TextContainer>
                    <Text>
                    As an avid reader, here are some of the books
                    I have read recently:
                    </Text>
                </TextContainer>
            </Container>
        )
    }
}