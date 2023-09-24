import React, { useState } from 'react';
import { View } from 'react-native';
import { createTodo } from '../../actions/create-todo';
import TodoMainInput from '../../ui/input/inputs/todo-main-input';
import CreateTodoButton from '../../ui/button/buttons/create-todo-button';
import { styles } from '../../ui/styles/styles';

const ToDoInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleCreateTodo = async () => {
    if (value) {
      await createTodo(value);
      setValue('');
    }
  };

  return (
    <View style={[styles.block, styles.row]}>
      <TodoMainInput
        value={value}
        setValue={setValue}
        handleCreateTodo={handleCreateTodo}
      />
      <CreateTodoButton handleCreateTodo={handleCreateTodo} />
    </View>
  );
};

export default ToDoInput;
