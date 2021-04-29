import { Input, HStack, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { FaTasks } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import React, { useState, useRef, useEffect } from 'react';

const TodoAdd = (props) => {
	const { setTodoList, todoList } = props;

	const [ addedTask, setAddedTask ] = useState('');

	useEffect(() => {
		console.log('useEffect is being called');

		// const task = {
		// 	id: nanoid(),
		// 	task: inputRef.current.value
		// };

		// setAddedTask((prevState) => task);
	}, []);

	// let taskAdder = (e) => {
	// 	const task = {
	// 		id: nanoid(),
	// 		task: e.target.value
	// 	};
	// 	return setAddedTask((prevState) => task);
	// };

	let addTaskHandler = (e) => {
		// e.preventDefault();
		// setAddedTask(() => {
		// 	return {
		// 		id: nanoid(),
		// 		task: inputRef.current.value
		// 	};
		// },( ) => {

		// });

		const task = {
			id: nanoid(),
			task: addedTask
		};

		if (!task.task) {
			return;
		}

		setTodoList((prevState) => [ ...todoList, task ]);
		setAddedTask('');
	};

	return (
		// <form>
		<HStack mt={8} alignItems="center">
			<InputGroup>
				<InputLeftElement pointerEvents="none" children={<FaTasks color="gray.300" />} />

				<Input
					variant="filled"
					placeholder="Add task"
					size="md"
					value={addedTask}
					onChange={(e) => {
						setAddedTask(e.target.value);
					}}
				/>
				<Button colorScheme="teal" ml={4} size="sm" px="8" type="submit" onClick={addTaskHandler}>
					Add Todo
				</Button>
			</InputGroup>
		</HStack>
		// </form>
	);
};

export default TodoAdd;
