const post = { id: 4, title: "new post" };
const comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was okay" },
  { postId: 4, content: "nice post" },
  { postId: 7, content: "neat" }
];

const filteredComments = comments.filter(comment => comment.postId === post.id);

console.log(filteredComments);
