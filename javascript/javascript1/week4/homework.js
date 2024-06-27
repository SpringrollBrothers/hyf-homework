let introducedName = "";
let toDos = [];
function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    const name = command.substring("Hello my name is ".length);
    if (introducedName === name) {
      return `you have already introduced yourself, ${name}`;
    } else {
      introducedName = name;
      return `nice to meet you, ${name}`;
    }
  }
  if (command === "What is my name") {
    if (introducedName) {
      return `Your name is ${introducedName}`;
    } else {
      return `you haven't introduced yourself`;
    }
  }
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const startIndex = "Add ".length;
    const endIndex = command.indexOf(" to my todo");
    const todo = command.substring(startIndex, endIndex);
    if (todo) {
      toDos.push(todo);
      return `${todo} added to your todo`;
    } else {
      return `Invalid todo item`;
    }
  }
  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const startIndex = "Remove ".length;
    const endIndex = command.indexOf(" from my todo");
    const todo = command.substring(startIndex, endIndex);
    const toDelete = toDos.indexOf(todo);
    if (toDelete !== -1) {
      toDos.splice(toDelete, 1);
      return `${todo} deleted from you todo`;
    } else {
      return `${todo} isn't on your list`;
    }
  }
  if (command == "What is on my todo?") {
    let toToList = "";
    for (let i = 0; i < toDos.length; i++) {
      toToList += i + 1 + toDos[i];
    }
    return `you have ${toDos} on your list`;
  }
  if (command == "What day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = months[month];
    const todayDate = `${day}. of ${monthName} ${year}`;
    return todayDate;
  }

  if (command.startsWith("What is ")) {
    const parts = command.split(" ");
    if (parts.length === 5) {
      const num1 = parseFloat(parts[2]);
      const operator = parts[3];
      const num2 = parseFloat(parts[4]);
      let result;
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      } else {
        return "Invalid operator";
      }
      return `${num1} ${operator} ${num2} = ${result}`;
    } else {
      return " Invalid command";
    }
  }

  if (command.startsWith("Set a timer for ")) {
    const parts = command.split(" ");
    if ((parts.length = 6)) {
      const time = parseInt(parts[4]);
      const unit = parts[5];
      let milliseconds = 0;
      if (unit === "minute" || unit === "minutes") {
        milliseconds = time * 60 * 1000;
      } else if (unit === "second" || unit === "seconds") {
        milliseconds = time * 1000;
      } else {
        return "Invalid time";
      }

      setTimeout(function () {
        console.log(`Timer done`);
      }, milliseconds);

      return `Timer set for ${time} ${unit}`;
    }
  } else {
    return "Invalid command";
  }
}

console.log(getReply("Hello my name is Daisy"));
console.log(getReply("Hello my name is Daisy"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add cleaning to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
//console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 * 3"));
console.log(getReply("What is 4 / 3"));
console.log(getReply("Set a timer for 5 seconds"));
