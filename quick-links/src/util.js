export function superHeroName() {
	let superHeroFirst = ["captain", "turbo", "galactic", "the", "aqua", "fire", "iron", "super", "green", "phantom", "dark", "ghost", "professor", "atomic", "rock", "omega", "rocket", "shadow", "agent", "silver", "wild", "wolf", "ultra", "wonder", "doctor", "star"];
	let superHeroLast = ["x", "shield", "machine", "justice", "beast", "wing", "arrow", "skull", "blade", "bolt", "cobra", "blaze", "soldier", "strike", "falcon", "fang", "king", "surfer", "bot", "guard", "thing", "claw", "brain", "master", "power", "storm"];


	let superHeroName = capFirstLetter(superHeroFirst[Math.floor(Math.random() * superHeroFirst.length)]) + " " + capFirstLetter(superHeroLast[Math.floor(Math.random() * superHeroLast.length)]);
	return superHeroName;
}
export function capFirstLetter(str) {
	let tempstr = "";
	tempstr = str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
	return tempstr;
}