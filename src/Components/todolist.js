
import React from 'react'
import { VStack, Text, HStack, IconButton} from '@chakra-ui/react'
import {FaTrash} from "react-icons/fa"

const Todolist = () => {

    const todo=[
        {id: 1,
        task: "get bread"},

        {id: 2,
        task: "take yogurt"}
    ]

    return (
        <VStack>
        {todo.map(todo=>(
                <HStack>
                <Text>{todo.task}</Text>
                <IconButton icon={<FaTrash/>}></IconButton>
                </HStack>
        )
           
                
                
        )}
         </VStack>
    )
}

export default Todolist
