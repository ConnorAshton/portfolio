import * as React from 'react';
import { Container, Image } from './styles'

const avatar = require('../../assets/avatar.png')

export class Avatar extends React.PureComponent {
    render(){
        return(
            <Container>
                <Image src={ avatar }></Image>
            </Container>
        )
    }
}