import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TodosContext } from '../../../App';
import { styles } from '../styles/styles';

interface TodoButtonProps {
  disabled?: boolean;
  type?: 'default' | 'primary' | 'ghost' | 'warning' | undefined;
  icon: React.ReactNode;
  onClick: () => Promise<void>;
  text?: string;
}

const TodoButton: React.FC<TodoButtonProps> = ({
  disabled,
  type = 'default',
  icon,
  onClick,
  text,
}) => {
  const { handleGetTodos } = useContext(TodosContext);

  const handlePress = async () => {
    await onClick();
    await handleGetTodos();
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        type === 'primary' && styles.primaryButton,
      ]}
      disabled={disabled}
      onPress={handlePress}
      activeOpacity={0.7} 
    >
      {icon}
      {text && <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>

  );
};

export default TodoButton;
