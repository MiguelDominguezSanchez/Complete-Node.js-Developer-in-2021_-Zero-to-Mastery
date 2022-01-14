/*
function findMeaning() {
	return 42
}

console.log(findMeaning())
// Object.assign()
*/

const mission = process.argv[2]

if (mission === 'learn') {
	console.log('Time to write some code!')
} else {
	// console.log('Is' + mission + ' really more fun?')
	console.log(`Is  ${mission}  really more fun?`)
}
