// Main Question: Get the passengers' names using the data provided 
// Bonus Part (a)- Return vegetarians/vegans
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order


const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
];

function getPassengersName() {
    let passengerNames = [];
    for (let i = 0; i < passengers.length; i++) {
        passengerNames.push(passengers[i].passengerName);
    }

    return passengerNames;
}

function getVegetriansPassengers() {
    let vegetariansNames = [];
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers);
        if (passengers[i].isVegetarianOrVegan) {
            vegetariansNames.push(passengers[i].passengerName);
        }
    }
    return vegetariansNames;
}


// function getVegetriansPassengers() {
//     return passengers
//         .filter((passenger) => passenger.isVegetarianOrVegan)
//         .map((passenger) => passenger.passengerName);
// }


getPassengersSortedByFlightsConnection =
    passengers.sort(
        (passengerA, passengerB) =>
            passengerA.connectedFlights - passengerB.connectedFlights
    );


console.log(getPassengersName())
console.log(getVegetriansPassengers());
console.log(getPassengersSortedByFlightsConnection);