// find
const getUserById = (users, id) => {
  return users.find((user) => user.id === id)
};
// findIndex
const getIndexOfApple = (foods) => {
  return foods.findIndex((food) => food.name === "apple")
};

// reduce
const getSquaredTotal = (numbers) => {
  return numbers.reduce((accumulator, currentVal) => {
    const squaredValue = currentVal * currentVal
    return accumulator + squaredValue
  }, 0)

};

// every
const hasOnlyEvenNumbers = (numbers) => {
  return numbers.every((number) => number % 2 === 0)
};

// some
const anyGreaterThan10 = (numbers) => {
  return numbers.some((number) => number > 10)
};

// Use your judgement to decide which array method to use!
const roundAll = (numbers) => {
  return numbers.map(number => Math.round(number))
};

const onlyStrings = (values) => {
  return values.filter(value => typeof value === 'string')
};

const stringsToLength = (strings) => {
  return strings.map(string => string.length)
};

const totalGreaterThanGiven = (numbers, limit) => {
  const sum = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
  }, 0)
  return sum > limit
};

const numberOfLongWords = (words) => {
  const longWords = words.filter(word => word.length > 4)
  return longWords.length
};

const numberOfCharacters = (str) => {
  //convert the string into an array of individual characters
  const characters = str.split('')
  return characters.reduce((countMap, char) => {
    // If the character already exists in the map, increment its count
    if (countMap[char]) {
      countMap[char]++
      // Otherwise, initialize its count to 1
    } else {
      countMap[char] = 1
    }
    return countMap
  }, {}) // Start with an empty object as the intial accumulator
};

const removeJerkFromCompany = (people) => {
  // Loop backwards to safely use splice without skipping indices
  for (let i = people.length - 1; i >= 0; i--) {
    if (people[i].personality === "jerk") {
      // Mutates the array in place
      people.splice(i, 1)
    }
  }
};

const chosenCoordinates = (coordinates, number) => {
  return coordinates.find(coordinatePair => {
    const [a, b] = coordinatePair
    return a + b === number
  })
};

// Sorting Functions
const sortWords = (words) => {
  const wordsCopy = words.slice()
  return wordsCopy.sort()
};

const sortNumbers = (numbers) => {
  // Creates a shallow copy before sorting to avoid mutating original array
  const numbersCopy = numbers.slice()

  return numbers.sort((a, b) => a - b)
};

const sortNumbersBetter = (numbers, isDescending) => {
  // const numbersCopy = numbers.slice()
  // return numbers.sort((number) => {
  const numbersCopy = [...numbers]
  numbersCopy.sort((a, b) => {
    if (isDescending) {
      return b - a

    }
    return a - b
  })
  return numbersCopy
};

const sortUsersByOrder = (users) => {
  // const usersCopy = users.slice()
  // return usersCopy.sort((a, b))
  const newUsers = [...users]
  newUsers.sort((a, b) => {
    return a.order - b.order
  })
  return newUsers
};

const sortUsersByName = (users) => {
  const newUsers = [...users]
  newUsers.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
  return newUsers
};

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
