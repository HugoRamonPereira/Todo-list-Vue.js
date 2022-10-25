export const getStorage = () => {
  const result = localStorage.getItem("todos");
  if (result) return JSON.parse(result);
  return [];
};

export const setStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
