// Task 1
const message = "Task 1";
alert(message);

const age = prompt("How old are you?");
if (age <= 17) {
  confirm("Do you study at school?");
} else if (age > 17 && age < 25) {
  confirm("Do you study at university?");
} else if (age >= 25 && age < 60) {
  confirm("Do you have a job?");
} else {
  confirm("What are you doing?");
}

// // Task 2
const message2 = "Task 2";
alert(message2);

let displayProperty = prompt("Add the display property:", " ");
switch (displayProperty) {
  case "block":
    alert(`display: ${displayProperty}`);
    break;
  case "flex":
    alert(`display: ${displayProperty}`);
    break;
  case "grid":
    alert(`display: ${displayProperty}`);
    break;
  case "inline":
    alert(`display: ${displayProperty}`);
    break;
  case "none":
    alert(`display: ${displayProperty}`);
    break;
  default:
    alert("Set display: inline-block");
}

// Task 3
const message3 = "Task 3";
alert(message3);

addNumber = prompt("Please enter the number", "0");
while (!Number(addNumber)) {
  addNumber = prompt(
    "Your number is incorrect, please enter corect number",
    "0"
  );
}

number = Number(addNumber);
result = number * 12;

alert(`${number} by 12 equels: ${result}`);

// // // Task 4
const max = 50;
const min = 2;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log("Even i: ", i);
  }
}
