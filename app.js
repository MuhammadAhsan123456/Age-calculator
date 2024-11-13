

// var date = new Date();

// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(day[date.getDay()]);



// var date = new Date();

// // console.log(date.getFullYear());

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log(month[date.getMonth()]);



// var Date = prompt("Enter Your Date");
// var Month = prompt("Enter Your Month");
// var Year = prompt("Enter Your Year");

// console.log(Date.valueOf());
// console.log(Month.valueOf());
// console.log(Year.valueOf());


function calculateAge() {
    // User se prompts ke zariye inputs lena
    const day = parseInt(prompt("Enter your birth day (1-31):"));
    let monthInput = prompt("Enter your birth month (1-12 or month name):");
    const year = parseInt(prompt("Enter your birth year:"));

    // Month ke naam ko handle karna (lowercase karna taake comparison aasan ho)
    monthInput = monthInput.toLowerCase();

    // Month name ko number mein convert karna
    const months = {
        "january": 1,
         "february": 2,
         "march": 3,
         "april": 4,
         "may": 5,
         "june": 6,
        "july": 7,
         "august": 8,
         "september": 9,
         "october": 10,
         "november": 11,
         "december": 12
    };

    // Agar user ne month ka naam diya hai to number mein convert karna
    let month;
    if (isNaN(monthInput)) {
        month = months[monthInput];
    } else {
        month = parseInt(monthInput);
    }

    // Invalid input handle karna
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 0) {
        alert("Please enter valid day, month, and year!");
        return;
    }

    // Aaj ki date fetch karna
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // JavaScript mein months 0 se start hote hain
    const currentDay = today.getDate();

    // User ki age calculate karna
    let age = currentYear - year;

    // Check karna agar month ya day current month ya day se peechay ho to age adjust karna
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Birthdate ko exact format mein banana
    const birthDate = new Date(year, month - 1, day);
    const birthDateFormatted = birthDate.toLocaleDateString('en-GB'); // DD/MM/YYYY format

    // Result show karna
    const result = document.getElementById('result');
    result.innerHTML = `<p>You are ${age} years old.</p>
                        <p>Your birthdate is: ${birthDateFormatted}</p>`;
}


















