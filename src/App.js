
import {Heading} from '@chakra-ui/react'
import Todolist from './Components/todolist'
import TodoAdd from './Components/todoAdd'
import { VStack,  IconButton  } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  return (
    <VStack p={4}>
      <IconButton isRound icon={<FaSun/>} size="lg" alignSelf="flex-end"></IconButton>
      <Heading size="2xl" mb="8" fontWeight="extrabold"
       bgGradient="linear(to-r, green.400, pink.500)"
       bgClip="text">Todo Application</Heading>
       <Todolist/>
    </VStack>
    
  );
}

export default App;
