const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];

const [{ location }, { name }] = companies;

console.log(location, name);

const Google = { locations: ["Mountain View", "New York", "London"] };

const {
  locations: [locOne, locTwo, locThree]
} = Google;

console.log(locOne, locTwo, locThree);
