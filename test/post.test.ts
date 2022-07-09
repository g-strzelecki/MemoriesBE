import { PostRecord } from "../records/post.record";
import { pool } from "../utils/db";

afterAll(async () => {
  await pool.end();
})

test('PostRecord returns data from database for one entry.', async () => {

  const post = await PostRecord.getOne('3173b25d-ff8c-11ec-8659-fc4596691c4b');

  console.log(post);

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
