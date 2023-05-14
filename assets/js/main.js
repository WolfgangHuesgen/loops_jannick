// Loops

function main() {
  //For Loop

  const nameList = ["Peter", "Jannick", "Maria"];
  //console.log(nameList);

  for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
  }

  const revenue = [500, 300, 200, 599, 834, 573, 293, 482];
  let totalrevenue = 0;

  for (let i = 0; i < revenue.length; i++) {
    totalrevenue += revenue[i];
    console.log(totalrevenue);
  }

  console.log("Total: " + totalrevenue);
  console.log("Hier folgt die FOROF-Schleife:");
  // ForOF-Schleife
  const cars = [
    { brand: "Mercedes", age: 10 },
    {
      brand: "VW",
      age: 5,
    },
    {
      brand: "Toyoata",
      age: 3,
    },
  ];
  // von jedem car von cars gebe das car aus, aus dem Array cars
  for (let car of cars) {
    if (car.brand === "Mercedes") {
      console.log(car);
    } else {
      console.log("Das Fahrzeug ist kein Mercedes!");
    }
  }
  console.log("Hier beginnt die while-Schleife");
  // while-Schleife - die Bedingung wier vorher geprüft

  let counter = 0;
  while (counter < 100) {
    console.log(counter);
    counter++;
  }

  console.log("Do-While-Schleife");
  //do while - die Bedingung wird am Ende geprüft - der do Block wird vor der Prüfung einmal ausgeführt
  let counter1 = 0;
  do {
    console.log(counter1);
    counter1++;
  } while (counter1 < 100);

  console.log("Verschachtelte Schleifen - For-Schleife");

  //nested loop - z.B. nutzbar bei Array in einem Array

  const days = 7;
  const weeks = 5;

  for (let i = 1; i <= weeks; i++) {
    console.log("Woche: " + i);

    for (let j = 1; j <= days; j++) {
      console.log("Tag: " + j + "    Woche " + i);
    }
  }

  console.log("continue");

  //continue unterbricht an der Position x und fährt danach im Code-Block fort
  // break bricht, wenn bedingung erfüllt ist ab
  const numbers = [100, 350, 250, 375, 1000, 750, 650, 3000, 1050, 500];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 1000) {
      continue;
    }

    console.log(numbers[i]);
  }
}
