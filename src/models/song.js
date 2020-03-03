import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    name: String,
    artist: String
});

export default mongoose.model("Song", SongSchema);