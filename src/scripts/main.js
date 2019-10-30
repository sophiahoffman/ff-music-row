// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

const jumpStopArtists = []
const chattenArtists = []
const polarArtists = []

const fullNamesArray = ["Bruce Atikins", "Jensen Brown", "Dre Funkz", "Dusta Grimes", "Bartholomew Danielson", "Avilee Dallas", "Austin Kinkaid", "Loyoncé Branis"]
const genreArray = ["Country", "Pop", "Funk", "Rap", "Bluegrass", "Country", "Pop", "Rap"]
const ageArray = ["23", "20", "25", "21", "23", "19", "22", "27"]

const createArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const populateArtistArrays = (fullNamesArray, genreArray, ageArray)=>  {
    for (let i = 0; i < ageArray.length; i++) {
        let name = fullNamesArray[i]
        let genre = genreArray[i]
        let age = ageArray[i]
        const newArtist = createArtist(name, genre, age)
        if (newArtist.genre === "Funk" || newArtist.genre === "Rap") {
            jumpStopArtists.push(newArtist)
        } else if (newArtist.genre === "Country" || newArtist.genre === "Bluegrass") {
            chattenArtists.push(newArtist)
        } else if (newArtist.genre === "Pop") {
            polarArtists.push(newArtist)
        } else {
            break
        }
    }
}

populateArtistArrays(fullNamesArray, genreArray, ageArray)

console.log(jumpStopArtists)
console.log(chattenArtists)
console.log(polarArtists)

// const newArtist = createArtist(name, genre, age)


