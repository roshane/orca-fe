export const fakeUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((resp) =>
    resp.json()
  );
