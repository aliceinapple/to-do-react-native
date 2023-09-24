import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import TodoButton from '../todo-button';
import { deleteTodo } from '../../../actions/delete-todo';
import { colors } from '../../styles/colors';

interface DeleteTodoButtonProps {
  id: string;
}

const DeleteTodoButton: React.FC<DeleteTodoButtonProps> = ({ id }) => {
  const handleDelete = async () => {
    await deleteTodo(id);
  };

  return (
    <TodoButton
      type="warning"
      icon={<AntDesign name="delete" size={24} color={colors.pink} />}
      onClick={handleDelete}
    />
  );
};

export default DeleteTodoButton;
