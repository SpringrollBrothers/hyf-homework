//Item array removal
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names);

//When will we be there

function getHours(speed, destinationDistance) {
  const hours = destinationDistance / speed;
  function formatTime(hours) {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    console.log(wholeHours + " hours and " + minutes + " minutes");
  }
  formatTime(hours);
}

const travelInformation = {
  speed: 100,
  destinationDistance: 974,
};

getHours(travelInformation.speed, travelInformation.destinationDistance);

//series duration of my life

const seriesDurations = [
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 1,
    minutes: 6,
  },
  {
    title: "Six Feet Under",
    days: 2,
    hours: 9,
    minutes: 44,
  },
  {
    title: "Mad Men",
    days: 3,
    hours: 0,
    minutes: 4,
  },
  {
    title: "Breaking Bad",
    days: 2,
    hours: 3,
    minutes: 40,
  },
  {
    title: "Better Call Saul",
    days: 2,
    hours: 1,
    minutes: 21,
  },
  {
    title: "Chernobyl",
    days: 0,
    hours: 5,
    minutes: 30,
  },
  {
    title: "Lost",
    days: 3,
    hours: 16,
    minutes: 30,
  },
];

function getTimePercentage(title, days, hours, minutes) {
  const minutesOf80Years = 80 * 365 * 24 * 60;
  const eachSeriesMinutes = days * 24 * 60 + hours * 60 + minutes;
  const timePercentage = (eachSeriesMinutes / minutesOf80Years) * 100;

  console.log(
    `<${title}> took ${timePercentage.toFixed(3)}% of my life!!!!!!!`
  );

  return timePercentage;
}
let inTotal = 0;
for (let i = 0; i < seriesDurations.length; i++) {
  //let series = seriesDurations[i];
  const percentage = getTimePercentage(
    seriesDurations[i].title,
    seriesDurations[i].days,
    seriesDurations[i].hours,
    seriesDurations[i].minutes
  );
  inTotal += percentage;
}
console.log(`In total thats ${inTotal.toFixed(3)}% of my life`);

//Note taking app, add notes

let notes = [];
function saveNote(content, id) {
  notes.push({ thingsToDo: content, number: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Vacuum the room", 3);
saveNote("Take a shower", 4);

//Note taking app, get notes
function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("please...do better");
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].number) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
const secondNote = getNote(4);

console.log(firstNote);
console.log(secondNote);

//Note taking app, logout

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(
      `The note with id: ${note.number}, has the following note text: ${note.thingsToDo}`
    );
  }
}
logOutNotesFormatted();

// new feature of deleting the completed tasks

function deleteNotes(deleteContent) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].thingsToDo === deleteContent) {
      notes.splice(i, 1);
    }
  }
}
deleteNotes("Pick up groceries");
console.log(notes);
