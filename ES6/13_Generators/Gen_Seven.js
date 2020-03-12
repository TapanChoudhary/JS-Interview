//Genarators with recursion
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment("Good Comment", []),
  new Comment("Bad Comment", []),
  new Comment("meh", [])
];

console.log(children);

const tree = new Comment("Great Post!!!", children);

console.log(tree);
