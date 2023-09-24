import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import TodoButton from '../todo-button';
import { toggleTodo } from '../../../actions/toggle-todo';

interface ToggleTodoButtonProps {
  id: string;
  completed: boolean;
}

const ToggleTodoButton: React.FC<ToggleTodoButtonProps> = ({
  id,
  completed,
}) => {

  const handleToggle = async () => {
    await toggleTodo(id, completed);
  };


  return (
    <TodoButton
      type="primary"
      icon={
        completed ? (
          <AntDesign name="back" size={24} />
        ) : (
          <AntDesign name="check" size={24} />
        )
      }
      onClick={handleToggle}
    />
  );
};

export default ToggleTodoButton;
