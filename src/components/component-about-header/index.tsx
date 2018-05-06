import * as React from 'react';
import { Container, Text } from './styles';

export class AboutHeader extends React.PureComponent{
    render(){
        return(
            <Container>
                <Text>Hey there 👋</Text>
            </Container>
        )
    }
}