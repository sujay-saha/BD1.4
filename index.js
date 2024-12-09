const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service!';
}

function getGreetMessage(userName) {
  return 'Hello, ' + userName + '!';
}

function isValidPassword(password) {
  let result = 'Password is ';
  if (password.length > 15) {
    return result + 'strong';
  }
  return result + 'weak';
}

function sumTwoNums(val1, val2) {
  return val1 + val2;
}

function subscriptionCheck(userName, isSubscribed) {
  if (isSubscribed) {
    return userName + ' is subscribed';
  } else {
    return userName + ' is not subscribed';
  }
}

function discountedPriceCalculate(price, discount) {
  let discountPrice = price * (discount / 100);
  return price - discountPrice;
}

function personalizedMessage(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}

function finalPriceCalculate(price, discount, tax) {
  let discountPrice = price * (discount / 100);
  let actualPrice = price - discountPrice;
  let totalTax = actualPrice * (tax / 100);
  return actualPrice + totalTax;
}

function totalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let userName = req.query.userName;
  res.send(getGreetMessage(userName));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(isValidPassword(password));
});

app.get('/sum', (req, res) => {
  let val1 = parseInt(req.query.val1);
  let val2 = parseInt(req.query.val2);
  res.send(sumTwoNums(val1, val2).toString());
});

app.get('/subscription-status', (req, res) => {
  let userName = req.query.userName;
  let isSubscribed = req.query.isSubscribed === 'true';
  res.send(subscriptionCheck(userName, isSubscribed));
});

app.get('/discounted-price', (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  res.send(discountedPriceCalculate(price, discount).toString());
});

app.get('/presonalized-greeting', (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(personalizedMessage(age, gender, name));
});

app.get('/final-price', (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  let tax = parseInt(req.query.tax);
  res.send(finalPriceCalculate(price, discount, tax).toString());
});

app.get('/total-exercise-time', (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(totalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
