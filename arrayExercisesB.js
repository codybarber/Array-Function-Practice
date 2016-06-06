//Leetspeak
var string = "Hey everyone!  Insightpool is looking for a junior front end engineer to join the team.";
var stringUpper = string.toUpperCase();
var stringSplit = stringUpper.split('');
var stringReplace = stringSplit.map(function(letter) {
  if (letter === 'A') {
    return '4';
  } else if (letter === 'E') {
    return '3';
  } else if (letter === 'G') {
    return '6';
  } else if (letter === 'I') {
    return '1';
  } else if (letter === 'O') {
    return '0';
  } else if (letter === 'S') {
    return '5';
  } else if (letter === 'T') {
    return '7';
  } else {
    return letter;
  }
});
var leetString = stringReplace.join('');
console.log(leetString);


//Basketball Players
var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];
// #1
var starters = players.filter(function(player) {
  return player.starter === true;
});
console.log("Starters: ", starters);

// #2
var pointGuards = players.filter(function(player) {
  return player.position === 'PG';
});
console.log("Point Guards: ", pointGuards);

// #3
var names = players.map(function(player) {
  return player.name;
});
console.log("Names: ", names);

// #4
var starters2 = players.filter(function(player) {
  if (player.starter === true) {
    return player;
  }
});
var starterNames = starters2.map(function(player) {
  return player.name;
});
console.log("Starter Names: ", starterNames);

// #5
var pointG = players.filter(function(player) {
  if (player.position === 'PG') {
    return player;
  }
});
var pgNames = pointG.map(function(player) {
  return player.name;
});
console.log("Point Guard Names: ", pgNames);

// #6
var averagePoints = players.map(function(player) {
  return player.avgPoints;
});
var sumAvgPoints = averagePoints.reduce(function(sum, n) {
  return sum + n;
}, 0);
console.log("Sum of Average Points: ", sumAvgPoints);

// #7
var starts = players.filter(function(player) {
  if (player.starter === true) {
    return player;
  }
});
var startAveragePoints = starts.map(function(player) {
  return player.avgPoints;
});
var sumStarterPoints = startAveragePoints.reduce(function(sum, n) {
  return sum + n;
}, 0);
console.log("Sum of Starter's Average Points: ", sumStarterPoints);

// #8
var tenMinutes = players.every(function(player) {
  return player.avgMinutesPlayed > 10;
});
console.log("Does every player play more than ten mintes a game? ", tenMinutes);

// #9
var start = players.filter(function(player) {
  if (player.starter === true) {
    return player;
  }
});
var starterMinutes = start.every(function(player) {
  return player.avgMinutesPlayed > 30;
});
console.log("Do starters average at least 30 minutes a game?", starterMinutes);

// #10
var positions = players.map(function(player) {
  return player.position;
}).reduce(function(tally, position) {
  if (!tally[position]) {
    tally[position] = 1;
  } else {
    tally[position] += 1;
  }
  return tally;
}, {});

console.log(positions);
