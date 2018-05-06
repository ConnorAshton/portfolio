import * as React from 'react';
import { Container, Image } from './styles'

export class DesignCard extends React.PureComponent {
    render(){
        return(
            <Container>
                <Image src={ this.props.image }></Image>
            </Container>
        )
    }
}