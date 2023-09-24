import React from 'react';
import { texts } from '../../../resources/texts';
import TodoInput from '../todo-input';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface TodoMainInputProps {
  value: string;
  setValue: (value: string) => void;
  handleCreateTodo: () => Promise<void>;
}

const TodoMainInput: React.FC<TodoMainInputProps> = ({
  value,
  setValue,
  handleCreateTodo,
}) => {
  return (
      <TodoInput
        placeholder={texts.add_todo}
        multiline={false}
        value={value}
        setValue={setValue}
        onPressEnter={handleCreateTodo}
        style={{ maxWidth: screenWidth - 100 }}
      />
  );
};

export default TodoMainInput;
