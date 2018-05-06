import * as React from 'react';
import { Container } from './styles';

export class MainBodyHolder extends React.PureComponent {
    render() {
        return (
            <Container>
                { this.props.children }
            </Container>
        );
    }
}