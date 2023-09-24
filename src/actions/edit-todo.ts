import config from "../../config.json";

export const editTodo = async (id: string, newText: string) => {
  try {
    const response = await fetch(
      `http://${config.SERVER_URL}:3000/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
      }
    );

    if (!response.ok) {
      throw new Error("Error editing todo");
    }
  } catch (error) {
    console.error("Error editing todo:", error);
    throw error;
  }
};
