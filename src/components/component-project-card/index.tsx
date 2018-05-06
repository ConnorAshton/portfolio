import * as React from 'react';
import { Container, Image } from './styles'

export class ProjectCard extends React.PureComponent {
    render(){
        return(
            <Container>
                <Image src={this.props.image}></Image>
            </Container>
        )
    }
}

