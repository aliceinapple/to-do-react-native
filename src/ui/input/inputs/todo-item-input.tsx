import React from 'react';
import { TextStyle } from 'react-native';
import TodoInput from '../todo-input';
import { styles } from '../../styles/styles';

interface TodoItemInputProps {
  readOnly: boolean;
  completed: boolean;
  value: string;
  setValue: (value: string) => void;
  handleEdit: () => Promise<void>;
}

const TodoItemInput: React.FC<TodoItemInputProps> = ({
  readOnly,
  completed,
  value,
  setValue,
  handleEdit,
}) => {
  const inputStyle: TextStyle = {
    textDecorationLine: completed ? 'line-through' : 'none',
  };

  return (
    <TodoInput
      readOnly={readOnly}
      multiline={true}
      value={value}
      setValue={setValue}
      onPressEnter={handleEdit}
      style={[inputStyle, !readOnly && styles.inputEdit]}
    />
  );
};

export default TodoItemInput;
