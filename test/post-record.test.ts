import { PostRecord } from "../records/post.record";

const defaultObj = {
  id: 'abc',
  tags: 'aaa,bbb',
  likeCount: 0,
  createdAt: new Date(),
  author: 'Test author',
  title: "Test tilte",
  message: 'Test message',
  selectedFile: 'test_file.png'
}

test('Can build PostRecord', () => {
  const post = new PostRecord(defaultObj);

  expect(post.id).toBe('abc');
  expect(post.tags).toContain('aaa');
  expect(post.tags).toContain('bbb');
});

test('Validates empty author', () => {
  expect(() => new PostRecord({
    ...defaultObj,
    author: '',
  })).toThrow('Author cannot be empty or exceed 50 chars.');
});
