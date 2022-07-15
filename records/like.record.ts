import { SimplePostEntity } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";

export class likeRecord implements SimplePostEntity {
  
  id: string;
  likeCount: number;

  constructor(obj: SimplePostEntity) {
    
    this.id = obj.id;
    this.likeCount = obj.likeCount;
  }
  
  async updateLikes(): Promise<void> {

    if (this.id) {
      await pool.execute("UPDATE `memories` SET `likeCount` = :likeCount WHERE `id` = :id", {
        id: this.id,
        likeCount: this.likeCount,
      });

    } else {
      throw new ValidationError('There is no such record to update likes.');
    }
  }
}
