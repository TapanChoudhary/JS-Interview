var savedFile = {
  extension: "jpg",
  name: "Destructuring",
  size: 123
};

function fileSummary(file) {
  return `This file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(fileSummary(savedFile));
