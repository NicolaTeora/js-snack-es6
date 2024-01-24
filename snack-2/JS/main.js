const students = [
    {
    id: 213,
    name: "Marco della Rovere",
    grades: 78
    },
    {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96
    },
    {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48
    },
    {
    id: 145,
    name: "Gaia Borromini",
    grades: 74
    },
    {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68
    },
    {
    id: 102,
    name: "Piero della Francesca",
    grades: 50
    },
    {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84
    }
];
console.table(students);
/*
console.log(students[0]);
console.log(students[0].name);

let studentName = students[0].name;
*/

//array di stringhe contenente il loro nome tutto in maiuscolo
const studentName = students.map((person) => person.name.toUpperCase());
console.table(studentName);

//array di oggetti "studente" che hanno un totale di voti superiore a 70
const studentValue = students.filter((person) => {
    return person.grades > 70
});
console.table(studentValue);

//array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
const studentIdValue = students.filter((person) => {
    return person.grades > 70 && person.id > 120;
});
console.table(studentIdValue);
