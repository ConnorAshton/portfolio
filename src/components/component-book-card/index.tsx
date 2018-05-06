import * as React from 'react';
import { Container, BookHolder, TextHolder, Title, Author, Description, BookImage } from './styles';

const sprintBook = require('../../assets/sprint-book.png');

export class BookCard extends React.PureComponent{
    render(){
        return(
            <Container>
                <BookHolder>
                    <BookImage src={sprintBook}></BookImage>
                </BookHolder>
                <TextHolder>
                    <Title>Sprint</Title>
                    <Author>by Jake Knapp</Author>
                    <Description>From three partners at Google Ventures, a unique five-day process for solving tough problems, proven at more than a hundred companies.{'\n'}
                    {'\n'}
                    Entrepreneurs and leaders face big questions every day: What's the most important place to focus your effort, and how do you start? What will your idea look like in real life? How many meetings and discussions does it take before you can be sure you have the right solution?{'\n'}
                    {'\n'}
                    Now there's a surefire way to answer these important questions: the sprint. Designer Jake Knapp created the five-day process at Google, where sprints were used on everything from Google Search to Google X. He joined Braden Kowitz and John Zeratsky at Google Ventures, and together they have completed more than a hundred sprints with companies in mobile, e-commerce, healthcare, finance, and more.</Description>
                </TextHolder>
            </Container>
        )
    }
}