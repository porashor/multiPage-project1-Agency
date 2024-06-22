import React from 'react'
import Container from './Container'
import image1 from "../assets/system/pic1.png"
import FixerCard from './FixerCard'
const Fixture = () => {
  return (
    <Container other>
        <FixerCard title={`The unseen of spending three years at Pixelgrade`} para={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsam ab officia eum eius officiis ducimus soluta cum! Magni quod ut enim veniam, error cupiditate veritatis ipsam soluta eum perspiciatis recusandae adipisci animi, quo laudantium atque nisi. Fuga saepe cum expedita quae a eaque, id doloribus perspiciatis iusto facere fugiat!`} btn={`Learn More`} image1={image1}/>
    </Container>
  )
}

export default Fixture