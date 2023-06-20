import express from "express";
import "dotenv/config";
import connectDB from "./utils/db.js";
import Links from "./models/Link.js";
const app = express();

// connect to database
connectDB();

const port = process.env.PORT;

app.get("/", async (req, res) => {
	try {
		res.status(200).json({ msg: "apps running" });
	} catch (error) {
		res.status(400).json({ errorMessage: error.message });
	}
});
app.get("/:id", async (req, res) => {
	try {
		const link = await Links.findOne({ shortId: req.params.id });

		if (!link) {
			res.json({ msg: "Invalid url" });
			return;
		}

		await Links.updateOne({ _id: link._id }, { $inc: { no_of_visits: 1 } });

		res.status(200).redirect(link.longUrl);
	} catch (error) {
		res.status(400).json({ errorMessage: error.message });
	}
});

app.listen(port, () => {
	console.log("Node is working ");
});
