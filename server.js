import 'dotenv/config'
import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import path from "path"
import { fileURLToPath } from 'url'

const app = express()

// CORS setup
if (process.env.NODE_ENV === 'local') {
	app.use(cors({
		origin: 'http://localhost:3000',
		credentials: true
	}))
} else {
	app.use(cors({
		credentials: true
	}))
}

// DB Setup
const dbConnect = async () => {
	try {
		if (process.env.NODE_ENV === 'local') {
			console.log("Connecting to database...")
			await mongoose.connect(process.env.LOCAL_DB_URI)
			console.log("Connected to Local Database...")
		} else {
			console.log("Connecting to database...")
			await mongoose.connect(process.env.MONGODB_URI)
			console.log("Connected to Production Database...")
		}
	} catch (error) {
		console.log("Database connection Failed.")
		console.error("Database connection Failed:", error);
	}
}
dbConnect()

// Setup for static file for production mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, "frontend", "dist")))
	app.get(/(.*)/, (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
	})
}

// Backend Port Setup
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
