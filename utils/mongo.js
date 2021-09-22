const mongoose = require('mongoose')

module.exports = async () => {
	await mongoose.connect(process.env.MongoPath, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then(()=>[
		console.log('> \x1b[31mConnected \x1b[32mto \x1b[36mdatabase!')
	]).catch((err) =>{
		console.log(err);
	})
	return mongoose
}