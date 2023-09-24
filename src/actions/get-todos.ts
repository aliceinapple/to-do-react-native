import config from "../../config.json";

export const getTodos = async () => {
  try {
    const response = await fetch(`http://${config.SERVER_URL}:3000/todos`);
    if (!response.ok) {
      throw new Error(`Error fetching todos: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
