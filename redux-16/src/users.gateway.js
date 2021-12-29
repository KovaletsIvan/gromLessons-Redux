const baseUrl = "https://api.github.com/users";

export const fetchData = (userName) =>
  fetch(`${baseUrl}/${userName}`).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error();
  });
