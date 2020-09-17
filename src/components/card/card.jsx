import React from 'react'
import styled from 'styled-components'

export default function Card({children}){
    return(
        <CardBlock>
            <CardText>
                {children}
            </CardText>
        </CardBlock>
    )
}

const CardBlock = styled.div`
display: flex;
flex-direction: collumn;
align-items: flex-start;
background-color: #5d7de2;
min-height: 200px;
width: 30%;
`

const CardText = styled.span`
display: flex;
color: #ffffff;
font-size: 2em;
font-weight: 500;
padding-left: 50px;
padding-top: 50px;
`