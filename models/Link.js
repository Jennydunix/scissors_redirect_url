import mongoose from "mongoose";
const { Schema } = mongoose;

const linksSchema = new Schema(
	{
		shortId: {
			type: String,
			required: true,
		},
		longUrl: {
			type: String,
		},
		userId: {
			type: String,
		},
		no_of_visits: {
			type: Number,
			default: 0,
		},
		desc: {
			type: String,
		},
		title: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Links", linksSchema);
