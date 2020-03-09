const savedFile = {
  extension: "jpg",
  name: "Destructuring",
  size: 123
};

function fileSummary({ name, extension, size }) {
  return `This file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));
