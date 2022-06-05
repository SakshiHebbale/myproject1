import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Section2 from './Section2'
function Home() {
  return (
      <Main>
    <Container>
    <Section
    title="Model 3"
    backgroundImage="model.3.jpg"
    BtnText="Custom order"   
    />   
    <Section2
    title="Model S"
    backgroundImage="model-s.jpg"
    BtnText="Custom order"   
    />
</Container>
<Container>
    <Section2
    title="Model Y"
    backgroundImage="model-y.jpg"
    BtnText="Custom order"   
    />  
    <Section
    title="Model X"
    backgroundImage="model-x.jpg"
    BtnText="Custom order"   
    />
    
    
</Container>
    
</Main>
  )
}

export default Home
const Container=styled.div`
width= 100vw;
height= 50vh
`
const Main=styled.div``