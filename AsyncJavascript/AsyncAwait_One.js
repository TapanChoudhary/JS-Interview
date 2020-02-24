const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function fetchUsers() {
  const respWait = await fetch(urls[0]);
  const processedResp = await respWait.json();
  console.log(processedResp);
}

async function getData() {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  );
  console.log(users);
  console.log(posts);
  console.log(albums);
}
