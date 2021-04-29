import React from 'react';
import { VStack, Text, HStack, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoList = (props) => {
	return props.todoList.length === 0 ? (
		<Badge fontWeight="bold" colorScheme="green" p="4" bord>
			Empty TodoList
		</Badge>
	) : (
		<VStack
			divider={<StackDivider borderColor="gray.200" />}
			borderColor="gray.200"
			p={4}
			borderWidth="2px"
			borderRadius="lg"
			w="100%"
			//alignItems="stretch"
			align="stretch"
			maxW={{ base: '80vw', lg: '70vw', xl: '50vw', sm: '90vw' }}
		>
			{props.todoList.map((todo) => (
				<HStack key={todo.id}>
					<Text>{todo.task}</Text>
					<Spacer />
					<IconButton onClick={() => props.delTask(todo.id)} icon={<FaTrash />} isRound />
				</HStack>
			))}
		</VStack>
	);
};

export default TodoList;
