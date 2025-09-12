const request = require('supertest');
const app = require('../index');

describe('API smoke', () => {
  it('GET /hello', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.text.toLowerCase()).toContain('hello world');
  });
});
