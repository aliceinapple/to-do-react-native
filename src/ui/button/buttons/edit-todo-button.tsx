import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TodoButton from '../todo-button';

interface EditTodoButtonProps {
  readOnly: boolean;
  setReadOnly: (value: boolean) => void;
  handleEdit: () => Promise<void>;
  completed: boolean;
}

const EditTodoButton: React.FC<EditTodoButtonProps> = ({
  readOnly,
  setReadOnly,
  handleEdit,
  completed,
}) => {
  const setReadOnlyFalse = async () => {
    setReadOnly(false);
  };

  return (
    readOnly ? (
      <TodoButton
        disabled={completed}
        type="primary"
        icon={<AntDesign name="edit" size={24}/>}
        onClick={setReadOnlyFalse}
      />
    ) : (
      <TodoButton
        type="primary"
        icon={<AntDesign name="checksquareo" size={24}/>}
        onClick={handleEdit}
      />
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default EditTodoButton;

