import { Router } from "express";
import { PostRecord } from "../records/post.record";
import { ValidationError } from "../utils/errors";
import path from "path";
import fs from "fs/promises";

export const PostRouter = Router()

  .get('/search/:title?', async (req, res) => {

    const posts = await PostRecord.findAll(req.params.title ?? ''); 

    res.json(posts);

  })

  .get('/:id', async (req, res) => {

    const post = await PostRecord.getOne(req.params.id);

    if (!post) {
      res
        .status(404)
        .json({ message: "There is no such record with this ID in database." })
    }
    
    res.json(post);

  })

  .post('/', async (req, res) => {

    const post = new PostRecord(req.body);

    await post.insert();
    res.json(post);

  })

  .delete('/:id', async (req, res) => {
    
    const post = await PostRecord.getOne(req.params.id);

    if (!post) {
      throw new ValidationError('No such record to delete in database.');
    }

    await post.delete();

    fs.rm(path.resolve(`./public/${post.selectedFile}`));

    res.json(post.id);

  })

  .patch('/:id', async (req, res) => {

    const postDB = await PostRecord.getOne(req.params.id);

    if (postDB === null) {
      throw new ValidationError('No record found with this ID.');
    }

    const post = await new PostRecord(req.body);

    await post.update();
    res.json(post.id);

  })
