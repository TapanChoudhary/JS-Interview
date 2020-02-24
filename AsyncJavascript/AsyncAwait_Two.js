const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function fetchUsers() {
  try {
    const respWait = await fetch(urls[0]);
    const processedResp = await respWait.json();
    console.log(processedResp);
  } catch (error) {
    console.log("error", error);
  }
}

async function getData() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log(users, posts, albums);
  } catch (error) {
    console.log(error);
  }
}
