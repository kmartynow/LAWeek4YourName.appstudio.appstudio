let petName = [ 'Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withSal = petName.push('Sal')

withSal = petName 

console.log(petName)

console.log(`The third pet is named ${petName[2]}.`)

console.log(`The array has ${withSal.length} names in it.`)

petName.pop()
console.log (petName)
