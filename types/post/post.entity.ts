export interface NewPostEntity extends Omit<PostEntity, 'id' | 'createdAt'>  {

  id?: string,
  createdAt?: Date,

}

export interface PostEntity {
  id: string,
  tags: string,
  likeCount: number,
  createdAt: Date,
  author: string
  title: string,
  message: string,
  selectedFile: string,
}
