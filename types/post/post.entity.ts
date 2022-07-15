export interface NewPostEntity extends Omit<PostEntity, 'id' | 'createdAt'>  {

  id?: string,
  createdAt?: Date,

}

export interface SimplePostEntity {
  id: string;
  likeCount: number;
}

export interface PostEntity extends SimplePostEntity {
  id: string,
  tags: string,
  likeCount: number,
  createdAt: Date,
  author: string
  title: string,
  message: string,
  selectedFile: string,
}
