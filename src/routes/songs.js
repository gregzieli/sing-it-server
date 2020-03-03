import { Router } from "express";
import { Song } from "../models";
const router = Router();

router.get("/", async (req, res, next) => {
  let artist = req.query.artist,
    song = req.query.song;

  let query = {};
  if (artist) {
    query.artist = artist;
  }
  if (song) {
    query.name = song;
  }
  
  let songs = await Song.find(query);
  res.send(songs);
});

export default router;
