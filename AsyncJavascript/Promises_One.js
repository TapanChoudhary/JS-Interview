const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
).then(([users, posts, albums]) => {
  console.log(users);
  console.log(posts);
  console.log(albums);
});
