/*5. Task: Find And Modify

Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array. */
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Mike", age: 30 },
  { name: "Emily", age: 27 },
];

const findAndModifyAge = (arr, personName, newAge) => {
  const updatedArray = arr.map((person) => {
    if (person.name === personName) {
      return { ...person, age: newAge };
    }
    return person;
  });
  return updatedArray;
};

const personToModify = { name: "Mike", newAge: 35 };
const updatedPeople = findAndModifyAge(
  people,
  personToModify.name,
  personToModify.newAge
);
console.log(updatedPeople);
