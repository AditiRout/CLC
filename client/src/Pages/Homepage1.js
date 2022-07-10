import { Container} from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import SignupCard from '../components/sign-up-form/sign-up-from';


//import SimpleCard from '../components/sign-in-form/sign-in-from';



const Homepage1 = () => {
  
  
  return (
    <Container className='Home'>   
      <Box >
        <SignupCard/>
      </Box>
    </Container>
    
  )
}

export default Homepage1