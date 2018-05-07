import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    // height: 432px;
    display: flex;
    flex-direction: row;
    margin-top: 211px;
`

export const TitleHolder = styled.div`
    height: 100%;
    width: 360px;
    margin: 0;
`

export const BodyHolder = styled.div`
    height: 100%;
    width: 480px;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: 208px;
`

export const Title = styled.text`
    width: 100%;
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #4a4a4a;
`

export const BodyText = styled.text`
    width: 100%;
    height: 100%;
    white-space: pre-wrap;
    font-family: AvenirNext-Regular;
    font-size: 20px;
    color: #4a4a4a;
`