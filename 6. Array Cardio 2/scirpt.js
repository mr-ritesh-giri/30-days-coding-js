const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this", id: 543219 },
  { text: "Super Good", id: 823834 },
  { text: "You are the best", id: 493009 },
  { text: "Ramen is my favourite fod ever", id: 489490 },
  { text: "Nice Nice Nice!", id: 323908 },
];

// Some and every checks
// Array.prototype.same() // is atleast one person 19?

const atleast = people.some(function (age) {
  umar = 2024 - age.year;
  if (umar >= 19) {
    return true;
  }
});
console.log("Atleast", atleast);

// Array.prototype.every() // is everyone 19?

const everyone = people.every(function (person) {
  return 2024 - person.year >= 19;
});
console.log("Everyone", everyone);

// Array.prototype.find()
// Find the comment with the ID of 823834

const findId = comments.find(function (num) {
  return num.id === 823834;
});
console.log(findId);

// Array.prototype.findIndex()
// Delete comment with the id 489490

const find = comments.findIndex(function (find) {
  return find.id === 489490;
});
console.log(find);

comments.splice(find, 1);
console.log(comments);

let newComment = [...comments.slice(0, find), ...comments.slice(find)];
console.table(newComment);
