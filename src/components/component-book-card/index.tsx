import * as React from 'react';
import { Container, BookHolder, TextHolder, Title, Author, Description, BookImage } from './styles';

export class BookCard extends React.PureComponent{
    render(){
        return(
            <Container>
                <BookHolder>
                    <BookImage src={this.props.bookImage}></BookImage>
                </BookHolder>
                <TextHolder>
                    <Title>{ this.props.title }</Title>
                    <Author>{ this.props.author }</Author>
                    <Description>{ this.props.description }</Description>
                </TextHolder>
            </Container>
        )
    }
}