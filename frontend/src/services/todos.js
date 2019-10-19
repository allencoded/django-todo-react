import { BASE_API } from './base';
async function getTodos() {
  try {
    const response = await fetch(`${BASE_API}/todos`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function editTodo(todo) {
  try {
    const response = await fetch(`${BASE_API}/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { getTodos, editTodo };