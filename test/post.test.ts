import { PostRecord } from "../records/post.record";
import { pool } from "../utils/db";

const defaultObj = {
  tags: 'aaa,bbb',
  likeCount: 0,
  author: 'Test author',
  title: 'Test tilte',
  message: 'Test message',
  selectedFile: 'test_file.png'
};

afterAll(async () => {
  await pool.end();
});


test('PostRecord returns data from database for one entry.', async () => {

  const post = await PostRecord.getOne('3173b25d-ff8c-11ec-8659-fc4596691c4b');

  expect(post).toBeDefined();
  expect(post.id).toBe('3173b25d-ff8c-11ec-8659-fc4596691c4b');
  expect(post.title).toBe('Alaska');

});

test('PostRecord returns null from database for unexisting PerformanceEntry.', async () => {

  const post = await PostRecord.getOne('xxx');

  expect(post).toBeNull();

});

test('PostRecord returns array of found entries.', async () => {

  const posts = await PostRecord.findAll('');

  expect(posts).not.toEqual([]);
  expect(posts[0].id).toBeDefined();

});

test('PostRecord returns new UUID.', async () => {

  const post = new PostRecord(defaultObj);
  console.log(post);
  await post.insert();

  expect(post.id).toBeDefined();
  expect(typeof post.id).toBe('string');

});

test('PostRecord inserts data to database.', async () => {

  const post = new PostRecord(defaultObj);
  await post.insert();

  const foundPost = await PostRecord.getOne(post.id);

  expect(foundPost).toBeDefined();
  expect(foundPost).not.toBeNull();
  expect(foundPost.id).toBe(post.id);

});
