class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  compareAge(user2) {
    if (this.age > user2.age) {
      return `${this.firstName} è più vecchio di ${user2.firstName}`
    } else if (this.age < user2.age) {
      return `${this.firstName} è più giovane di ${user2.firstName}`
    } else {
      return `${this.firstName} e ${user2.firstName} hanno la stessa età`
    }
  }
}

const user1 = new User("Mario", "Rossi", 30, "Milano")
const user2 = new User("Mimmo", "Buscetta", 25, "Palermo")

console.log(user1.compareAge(user2))
console.log(user2.compareAge(user1))
const user3 = new User("Loredana", "Parisi", 30, "Messina")
console.log(user1.compareAge(user3))

const petName = document.getElementById("petName")
const ownerName = document.getElementById("ownerName")
const species = document.getElementById("species")
const breed = document.getElementById("breed")
const form = document.getElementById("user-form")

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }
  same(pet) {
    return this.ownerName === pet.ownerName
  }
}

const pets = []
form.addEventListener("submit", function (e) {
  e.preventDefault()
  const pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )
  pets.push(pet)
  console.log(pet)
})
