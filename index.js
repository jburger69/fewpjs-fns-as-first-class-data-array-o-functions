var wakeDog = function wakeDog(dogName="Xerox", dogBreed="Border Collie") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function leashDog(dogName="Xerox", dogBreed="Border Collie") {
	console.log(`Leash ${dogName} the ${dogBreed}`);
	return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function walkToPark(dogName="Xerox", dogBreed="Border Collie") {
	console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
	return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function throwFrisbee(dogName="Xerox", dogBreed="Border Collie") {
	console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
	return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function walkHome(dogName="Xerox", dogBreed="Border Collie") {
	console.log(`Walk home with ${dogName} the ${dogBreed}`);
	return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function unleashDog(dogName="Xerox", dogBreed="Border Collie") {
	console.log(`Unleash ${dogName} the ${dogBreed}`);
	return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => {
  for (let i = 0; i < routine.length; i++) {
    return routine[i]
  }
}