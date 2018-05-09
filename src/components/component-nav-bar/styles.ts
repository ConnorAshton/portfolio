import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-end;
`

export const Name = styled.text`
    display: inline-block;
    padding: 0.2rem;
    font-family: AvenirNext-Bold;
    font-size: 20px;
    color: #4a4a4a;
    margin-left: 54px;
`

export const Links = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-right: 54px;
`

export const LinkItem = styled.li`
    display: inline-block;
    padding: 1rem 1rem 0.1rem 1rem;
    border-bottom: 0.1rem solid transparent;
    margin: 0;

    &:hover,
    &:active,
    &:focus,
    &.active { 
        font-weight: bold;
        border-color: #ef557f;
    }
`

export const LinkText = styled.text`
    font-family: AvenirNext-Medium;
    font-size: 18px;
    text-align: center;
    color: #4a4a4a;
`