require('dotenv').config();
require('./config/database')

const app = require('./app-server')
app.use(require('./config/checkToken'));

const PORT = process.env.PORT || 8001

app.listen(PORT, ()=>{
	console.log(`listening on ${PORT}.`)
})