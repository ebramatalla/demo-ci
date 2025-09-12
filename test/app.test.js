const request = require('supertest');
const { app, server } = require('../index');

afterAll(() => server.close());

it('GET /hello', async () => {
  const r = await request(app).get('/hello');
  expect(r.status).toBe(200);
  expect(r.text.toLowerCase()).toContain('hello world');
});
