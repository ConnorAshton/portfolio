import * as React from 'react';
import { Container, Name, Links, LinkItem, LinkText } from './styles';
import Link from 'gatsby-link';

const ListLink = props =>
    <LinkItem>
        <Link to={props.to} style={{textDecoration: 'none'}}>
            <LinkText>
                { props.children }
            </LinkText>
        </Link>
    </LinkItem>

export class NavBar extends React.PureComponent {

    render(){
        return(
            <Container>
                <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none', textDecoration: 'none'}}>
                    <Name>Connor Ashton</Name>
                </Link>
                <Links>
                    <ListLink to="/">Work</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/bookshelf/">Bookshelf</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </Links>
            </Container>
        )
    }
}