import { Heading } from '@chakra-ui/react';
import TodoList from './Components/todolist';
import TodoAdd from './Components/todoAdd';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useCallback, useEffect } from 'react';

const App = () => {
	const [ todoList, setTodoList ] = useState([]);

	const onDelHandler = (id) => {
		let filteredArray = todoList.filter((eachEle) => eachEle.id !== id);
		setTodoList(filteredArray);
	};

	return (
		<VStack p={4}>
			<IconButton isRound icon={<FaSun />} size="lg" alignSelf="flex-end" />
			<Heading
				size="2xl"
				mb="8"
				fontWeight="extrabold"
				bgGradient="linear(to-r, green.400, pink.500)"
				bgClip="text"
			>
				Todo Application
			</Heading>
			<TodoList todoList={todoList} delTask={onDelHandler} />
			<TodoAdd setTodoList={setTodoList} todoList={todoList} />
		</VStack>
	);
};

export default App;
