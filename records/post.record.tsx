import { NewPostEntity, PostEntity } from "../types";
import { ValidationError } from "../utils/errors";

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
}