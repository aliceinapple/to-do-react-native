import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import TodoButton from '../todo-button';

interface CreateTodoButtonProps {
  handleCreateTodo: () => Promise<void>;
}

const CreateTodoButton: React.FC<CreateTodoButtonProps> = ({
  handleCreateTodo,
}) => {
  return (
    <TodoButton
      type="primary"
      icon={<AntDesign name="plus" size={30} />}
      onClick={handleCreateTodo}
    />
  );
};

export default CreateTodoButton;
