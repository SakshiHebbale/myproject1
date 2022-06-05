import React from 'react'
import styled from 'styled-components'

function Section({backgroundImage,title,BtnText}) {
  return (
    <Wrap bgImage={backgroundImage}>
        <ItemText>
            <h1>
                {title}
            </h1>
           
        </ItemText>
        <Buttons><Buttongroup>
            <TxtButton > {BtnText} </TxtButton>
            
        </Buttongroup>

        </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
    width:75%;
    
    height:50vh;
   float:left;
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
  `
const ItemText=styled.div``
const Buttons=styled.div``
const Buttongroup=styled.div``
const TxtButton=styled.div`
background-color:rgb(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
  `