import axios from "axios";

const getAll = (url) => axios.get(url);

const findUserAndUpdate = (arr, id, newObj) => {
  const objId = arr.findIndex((obj) => obj.id === id);
  arr[objId] = newObj;
  return arr;
};

const filteredData = (arr, userId) => {
  const userTodos = arr.filter((todo) => {
    return todo.userId === userId;
  });
  return userTodos;
};

const addNewTodo = (todosArr, newTodo) => {
  const todos = todosArr.push(newTodo);
  return todos;
};



function removeDuplicates(todosArr) {
  const filteredIdArr = todosArr.filter(
    (todo, index) => todosArr.indexOf(todo) === index
  );
  


}

const checkTodos = (todosArr) => {
  const arr = todosArr.filter((todo) => todo.completed == false);

  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }

  
};

export {
  getAll,
  findUserAndUpdate,
  filteredData,
  addNewTodo,
  checkTodos,
  removeDuplicates,
};
