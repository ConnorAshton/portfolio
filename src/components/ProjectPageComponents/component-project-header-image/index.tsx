import * as React from 'react';
import { Container, Image } from './styles';

export class ProjectHeaderImage extends React.PureComponent {
    render(){
        return(
            <Container>
                <Image src={ this.props.headerImage}></Image>
            </Container>
        )
    }
}