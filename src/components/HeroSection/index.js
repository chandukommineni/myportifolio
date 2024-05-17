import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import {Tilt } from "react-tilt";
import {motion} from "framer-motion";
import {headTextAnimation,headContainerAnimation,headContentAnimation} from "../../utils/motion"

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>

               <motion.div {...headContainerAnimation}>
               
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <motion.div {...headTextAnimation}>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>                        
                            </TextLoop>
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                                               
        
                        <ResumeButton href={Bio.resume} target='display'>View Resume</ResumeButton>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div {...headContentAnimation}>
                        <Tilt
                            options={{ max: 25, scale: 1.05 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                perspective: '1000px',
                            }}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </Tilt>

                        </motion.div>
                       
                    </HeroRightContainer>
                </HeroInnerContainer>
                
               </motion.div>
                

            </HeroContainer>
        </div>
    )
}

export default HeroSection