import styled from 'styled-components';

export const Container = styled.div`
    width: 1081px;
    height: 661px;
    background-color: #59ed;
    display: flex;
    flex-direction: row;
`

export const BookHolder = styled.div`
    height: 100%;
    width: 435px;
    background-color: #439
`

export const TextHolder = styled.div`
    width: 636px;
    height: 100%;
    background-color: #59a;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: 72px;
`

export const Title = styled.text`
    width: 100%;
    background-color: #959;
    // display: inline-block;
    height: 63px;
    margin: 0;
    font-family: AvenirNext-DemiBold;
    font-size: 46px;
    letter-spacing: 0.4px;
    color: #4a4a4a;
`

export const Author = styled.text`
    width: 100%;
    background-color: #347;
    height: 25px;
    font-family: AvenirNext-Regular;
    font-size: 18px;
    letter-spacing: 0.4px;
    color: #4a4a4a;
    display: block;
`

export const Description = styled.text`
    width: 100%;
    height: 100%;
    background-color: #fff;
    font-family: AvenirNext-Regular;
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: #4a4a4a;
    white-space: pre-wrap;
    margin-top: 53px;
`



export const BookImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
`