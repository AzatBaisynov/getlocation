const express = require("express");
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/info', async (req, res) => {
	console.log("test")
	console.log("Azat",req.body);
	res.status(200)
})


app.listen(PORT, () => {
	console.log("app has been started")
})

