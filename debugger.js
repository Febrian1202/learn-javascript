function createFullName (firstName, middleName, lastName) {
  debugger
  const fullName = `${firstName} ${middleName} ${lastName}`
  return fullName
}

const name = createFullName('Muhammad', 'Febrian', 'Syah')
console.info(name)

function sum (...numbers) {
  debugger
  let total = 0
  for (const number of numbers) {
    total += number
  }
  return total
}

console.info(sum(1, 1, 1, 1, 1, 1, 1))
