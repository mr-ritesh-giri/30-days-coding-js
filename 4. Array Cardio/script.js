const inventors = [
  { first: "Thomas", last: "Edison", year: 1847, passed: 1931 },
  { first: "Alexander", last: "Graham Bell", year: 1847, passed: 1922 },
  { first: "Nikola", last: "Tesla", year: 1856, passed: 1943 },
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Steve", last: "Jobs", year: 1955, passed: 2011 },
  { first: "Elon", last: "Musk", year: 1971, passed: 2024 },
];

const names = [
  "John",
  "Emily",
  "Michael",
  "Jessica",
  "William",
  "Sophia",
  "Daniel",
  "Olivia",
  "Christopher",
  "Ava",
  "Matthew",
  "Emma",
  "David",
  "Isabella",
  "James",
  "Mia",
  "Joseph",
  "Charlotte",
  "Andrew",
  "Amelia",
  "Ryan",
  "Ethan",
  "Grace",
  "Alexander",
  "Harper",
  "Nicholas",
  "Evelyn",
  "Tyler",
  "Abigail",
  "Samuel",
  "Chloe",
  "Benjamin",
  "Elizabeth",
  "Brandon",
  "Ella",
  "Nathan",
  "Samantha",
  "Jonathan",
  "Victoria",
  "Christian",
  "Madison",
  "Dylan",
  "Avery",
  "Zachary",
  "Scarlett",
  "Logan",
  "Hannah",
  "Justin",
  "Lily",
  "Gabriel",
  "Addison",
  "Jose",
  "Natalie",
  "Brandon",
  "Lillian",
  "Kevin",
  "Zoe",
  "Austin",
  "Brooklyn",
  "Caleb",
  "Layla",
  "Robert",
  "Hailey",
  "Elijah",
  "Gabriella",
  "Thomas",
  "Kaylee",
  "Jordan",
  "Anna",
  "Jason",
  "Peyton",
  "Ian",
  "Leah",
  "Adam",
  "Audrey",
  "Isaac",
  "Aaliyah",
  "Mason",
  "Jasmine",
  "Juan",
  "Claire",
  "Bryan",
  "Morgan",
  "Evan",
  "Lucy",
  "Aiden",
  "Aria",
  "Carlos",
  "Katherine",
  "Cameron",
  "Julia",
  "Diego",
  "Alexandra",
  "Jayden",
  "Mackenzie",
  "Patrick",
  "Savannah",
];

// Array Prototype.filter()
// Filter the list of inventors who were born after 1900's to 1999's?

const filter = inventors.filter(function (inventor) {
  if (inventor.year >= 1900 && inventor.year < 2000) {
    return inventor.year;
  }
});

console.table("Filter", filter);

// Array Prototype.map()
// Give us an array of the inventory with first and last names?

const firstLast = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
});

console.table("First Last", firstLast);

// Array Prototype.sort()
// Sort the inventors by the birthdate, oldest to youngest?

const sort = inventors.sort(function (a, b) {
  return a.year > b.year ? 1 : -1;
});
console.table("Sort", sort);

// Array Prototype.reduce()
// How many years did all the inventors live?

const age = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(age);

// Sort the inventors by years lived?

const yearsLived = inventors.sort(function (a, b) {
  let years = a.passed - a.year;
  let passed = b.passed - b.year;

  return passed > years ? 1 : -1;
});

console.table("Years Lived", yearsLived);

// Create a list of Boulevards in Paris that contains "de" anywhere in the name?

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));

// const de = links
//   .map((link) => link.textContent)
//   .filter((link) => link.includes("de"));

// Reduce Exercises
// Sum up the instances of each of these

const vehicles = [
  "car",
  "truck",
  "motorcycle",
  "bus",
  "van",
  "bicycle",
  "scooter",
  "train",
  "car",
  "car",
  "truck",
  "bus",
  "van",
  "scooter",
  "train",
  "train",
];

const transport = vehicles.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, []);

console.log(transport);
