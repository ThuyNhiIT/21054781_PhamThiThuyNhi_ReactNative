/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// 1. Store Mark's and John's mass and height in variables
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula
function calculateBMI(mass, height) {
  return mass / (height * height);
}
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
function compareBMI(markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    return true;
  } else {
    return false;
  }
}

let markHigherBMI1 = compareBMI(markBMI1, johnBMI1);
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);

console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);

let markHigherBMI2 = compareBMI(markBMI2, johnBMI2);
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI2}`);

console.log("--------------------------------------------------");

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)
*/

if (markHigherBMI1) {
  console.log(
    `Mark's BMI (${markBMI1.toFixed(
      2
    )}) is higher than John's (${johnBMI1.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI1.toFixed(
      2
    )}) is higher than Mark's (${markBMI1.toFixed(2)})`
  );
}

if (markHigherBMI2) {
  console.log(
    `Mark's BMI (${markBMI2.toFixed(
      2
    )}) is higher than John's (${johnBMI2.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI2.toFixed(
      2
    )}) is higher than Mark's (${markBMI2.toFixed(2)})`
  );
}

console.log("--------------------------------------------------");
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// 1. Calculate the average score for each team
console.log("B1");
let dolphinsAverageScore1 = (96 + 108 + 89) / 3;
let koalasAverageScore1 = (88 + 91 + 110) / 3;

let dolphinsAverageScore2 = (97 + 112 + 101) / 3;
let koalasAverageScore2 = (109 + 95 + 123) / 3;

let dolphinsAverageScore3 = (97 + 112 + 101) / 3;
let koalasAverageScore3 = (109 + 95 + 106) / 3;

// in ra
console.log(`Dolphins average score1: ${dolphinsAverageScore1}`);
console.log(`Koalas average score1: ${koalasAverageScore1}`);

console.log(`Dolphins average score2: ${dolphinsAverageScore2}`);
console.log(`Koalas average score2: ${koalasAverageScore2}`);

console.log(`Dolphins average score3: ${dolphinsAverageScore3}`);
console.log(`Koalas average score3: ${koalasAverageScore3}`);

console.log("B2");
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console
function determineWinner(dolphinsAverageScore, koalasAverageScore) {
  if (dolphinsAverageScore > koalasAverageScore) {
    return `Dolphins win (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  } else if (koalasAverageScore > dolphinsAverageScore) {
    return `Koalas win (${koalasAverageScore} vs. ${dolphinsAverageScore})`;
  } else {
    return `It's a draw (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  }
}

console.log(determineWinner(dolphinsAverageScore1, koalasAverageScore1));
console.log(determineWinner(dolphinsAverageScore2, koalasAverageScore2));
console.log(determineWinner(dolphinsAverageScore3, koalasAverageScore3));

console.log("B3");

// 3. Bonus 1: Include a requirement for a minimum score of 100
function determineWinnerWithMinimumScore(
  dolphinsAverageScore,
  koalasAverageScore
) {
  if (
    dolphinsAverageScore > koalasAverageScore &&
    dolphinsAverageScore >= 100
  ) {
    return `Dolphins win (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  } else if (
    koalasAverageScore > dolphinsAverageScore &&
    koalasAverageScore >= 100
  ) {
    return `Koalas win (${koalasAverageScore} vs. ${dolphinsAverageScore})`;
  } else {
    return `No team wins the trophy`;
  }
}

console.log(
  determineWinnerWithMinimumScore(dolphinsAverageScore1, koalasAverageScore1)
);

console.log(
  determineWinnerWithMinimumScore(dolphinsAverageScore2, koalasAverageScore2)
);

console.log(
  determineWinnerWithMinimumScore(dolphinsAverageScore3, koalasAverageScore3)
);

console.log("B4");

// 4. Bonus 2: Minimum score also applies to a draw

function determineWinnerWithMinimumScoreAndDraw(
  dolphinsAverageScore,
  koalasAverageScore
) {
  if (
    dolphinsAverageScore > koalasAverageScore &&
    dolphinsAverageScore >= 100
  ) {
    return `Dolphins win (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  } else if (
    koalasAverageScore > dolphinsAverageScore &&
    koalasAverageScore >= 100
  ) {
    return `Koalas win (${koalasAverageScore} vs. ${dolphinsAverageScore})`;
  } else if (
    dolphinsAverageScore === koalasAverageScore &&
    dolphinsAverageScore >= 100 &&
    koalasAverageScore >= 100
  ) {
    return `It's a draw (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  } else {
    return `No team wins the trophy`;
  }
}

console.log(
  determineWinnerWithMinimumScoreAndDraw(
    dolphinsAverageScore1,
    koalasAverageScore1
  )
);

console.log(
  determineWinnerWithMinimumScoreAndDraw(
    dolphinsAverageScore2,
    koalasAverageScore2
  )
);

console.log(
  determineWinnerWithMinimumScoreAndDraw(
    dolphinsAverageScore3,
    koalasAverageScore3
  )
);

console.log("--------------------------------------------------");

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/

// 1. Calculate the tip, depending on the bill value
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // này để kiểm tra bill có nằm trong khoảng từ 50 đến 300 không và tính tip tương ứng

// 2. Print a string to the console containing the bill value, the tip, and the final value
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
