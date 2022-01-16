const EventEmitter = require('events')
const author = new EventEmitter()

// Subscribe to author for Observer 1
author.on('academy', (result) => {
	if (result === 'writing') {
		console.log('Danke Schön, wirklich interessant!')
	}
})

// Subscribe to author for Observer 2
author.on('academy', (result) => {
	if (result === 'writing') {
		console.log('Boo, ich hätte besser sein können!')
	}
})

process.on('exit', (code) => {
	console.log('Process exit event with code: ', code)
})

author.emit('academy', 'writing')
author.emit('academy', 'nowriting')
