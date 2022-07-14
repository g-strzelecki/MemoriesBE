import express, { json, static as staticFolder } from "express";
import cors from "cors";
import 'express-async-errors';
import { handleError, ValidationError } from "./utils/errors";
import rateLimit from 'express-rate-limit';
import { PostRouter } from "./routers/post.router";
import multer from "multer";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(staticFolder('public'));

app.use(json());
app.use(rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
}));

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({storage}).single('file');

app.get('/', async (req, res) => {
  throw new ValidationError('You shall not pass!');
})

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  })
});

app.use('/post', PostRouter);

app.get('/:id', async (req, res) => {
  throw new ValidationError('At least one image does not exists in database.');
})

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
  console.log('Listening on port http://localhost:3001')
})
