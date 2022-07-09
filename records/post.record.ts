import { FieldPacket } from "mysql2";
import { NewPostEntity, PostEntity } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";

type PostRecordResults = [PostEntity[], FieldPacket[]];

export class PostRecord implements PostEntity {
  
  id: string;
  tags: string[];
  likeCount: number;
  createdAt: Date;
  author: string;
  title: string;
  message: string;
  selectedFile: string;

  constructor(obj: NewPostEntity) {
  
    if (!obj.title || obj.title.length > 100) {

      throw new ValidationError('Title cannot be empty or has more than 100 chars.');

    }

    if (!obj.message || obj.message.length > 1000) {

      throw new ValidationError('Message cannot be empty or exceed 1000 chars.');

    }

    if (!obj.author || obj.author.length > 50) {

      throw new ValidationError('Author cannot be empty or exceed 50 chars.');

    }

    if (!obj.selectedFile || obj.selectedFile.length > 500) {

      throw new ValidationError('Author cannot be empty or exceed 500 chars.');

    }

    this.id = obj.id;
    this.tags = obj.tags;
    this.likeCount = obj.likeCount;
    this.createdAt = obj.createdAt;
    this.author = obj.author;
    this.title = obj.title;
    this.message = obj.message;
    this.selectedFile = obj.selectedFile;

  }

  static async getOne(id: string): Promise<PostRecord | null> {
    const [results] = await pool.execute("SELECT * FROM `memories` WHERE id = :id", {
      id,
    }) as PostRecordResults;

    return results.length === 0 ? null : new PostRecord(results[0]);
  }

  static async findAll(title: string): Promise<PostRecord[]> {
    const [results] = await pool.execute("SELECT * FROM `memories` WHERE `title` LIKE :search", {
      search: `%${title}%`,
    }) as PostRecordResults;

    return results.map(result => new PostRecord(result));
  }
}
