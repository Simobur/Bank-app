'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}</div>
        </div>
    
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; //stw

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(accounts);

const calcAndPrintBalance = function (accs) {
  accs.forEach(function (acc) {
    acc.balance = acc.movements.reduce((x, mov) => x + mov, 0);
    labelBalance.textContent = `${acc.balance} EUR`;
  });
};
// console.log(calcAndPrintBalance(accounts));
calcAndPrintBalance([account1]);
// console.log(accounts);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

const balance = movements.reduce((x, mov) => x + mov, 100);
console.log(balance);

const maxValue = movements.reduce((x, mov) => {
  if (x < mov) x = mov;
  return x;
}, movements.at(0));

console.log(maxValue);
// const depositsForOf = [];
// for (const mov of movements) if (mov > 0) depositsForOf.push(mov);

// console.log(depositsForOf);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// /*
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));

// const copyArr = arr.slice();
// console.log(arr);
// console.log(copyArr);

// // Splice - mutated originall array:

// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// // REVERSE - change order of array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - don;t mutated oryginall array

// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// console.log(letters.join('-'));
// */
// // At method

// // const arr3 = [23, 11, 55];

// // console.log(arr3[0]);
// // console.log(arr3.at(0));
// // //last element
// // console.log(arr3[arr3.length - 1]);
// // console.log(arr3.slice(-1)[0]);

// // console.log(arr3.at(-1));

// // console.log('szymon'.at(0).toUpperCase());

// // FOR Each
// /*
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`Your deposit is ${movement}`);
// //   } else {
// //     console.log(`Your withdraw is ${Math.abs(movement)}`);
// //   }
// // }

// movements.forEach(function (mov, index, array) {
//   if (mov > 0) {
//     console.log(`${index}: Your deposit is ${mov}`);
//   } else {
//     console.log(`${index}: Your withdraw is ${Math.abs(mov)}`);
//   }
// });

// // You cannot breake or continue that forEach function

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} ${value}`);
// });

// // key in SET = is unnecessary
// */
/*
// const julia = [3, 5, 2, 12, 7];
// const kate = [9, 16, 6, 8, 3];
const julia = [9, 16, 6, 8, 3];
const kate = [10, 5, 6, 1, 4];

const checkDogs = function (julia, kate) {
  const copyJulia = julia.slice(1, -2);
  // const bothAges = [...copyJulia, ...kate];
  const bothAges = copyJulia.concat(kate);
  bothAges.forEach(function (age, i) {
    if (age >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    else
      console.log(`Dog number ${i + 1} is an puppy, and is ${age} years old`);
  });
};
checkDogs(julia, kate);

// ARRAY METHODS

//MAP Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const ratioEuroToUsd = 1.1;

const USD = movements.map(function (mov) {
  return mov * ratioEuroToUsd;
});

const USDArrow = movements.map(mov => mov * ratioEuroToUsd);

console.log(movements);
console.log(USD);
console.log(USDArrow);
// const forUSD = [];
// for (const mov of movements) {
//   forUSD.push(mov * ratioEuroToUsd);
// }

// console.log(forUSD);

const movementNote = movements.map(
  (mov, i) =>
    // let note;
    // if (mov > 0) {
    //   note = `deposit`;
    // } else note = `wihdraw`;
    // return console.log(`${i + 1}. Your ${note} of ${Math.abs(mov)} is succes!`);

    `${i + 1}. Your ${mov > 0 ? 'deposit' : 'withdraw'} of ${Math.abs(
      mov
    )} is succes!`
);

movementNote.forEach(function (position) {
  console.log(position);
});

// FILTR Method

*/

// Maximum value

const array = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const filtredAge = humanAge.filter(age => age >= 18);

  const ave = filtredAge.reduce((x, age) => (x += age), 0) / filtredAge.length;
  return ave;

  // const humanAge = ages.forEach(function (dogAge) {
  //   dogAge <= 2 ? console.log(2 * dogAge) : console.log(dogAge * 4);
  // });
};

console.log(calcAverageHumanAge(array));
