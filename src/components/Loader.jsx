import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack v={"90vh"} justifyContent={"center"} m={"350"}>
        <Box transform={"scale(3)"}>
            <Spinner size={"xl"}/>
        </Box>
    </VStack>
  )
}

export default Loader