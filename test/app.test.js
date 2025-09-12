const request = require('supertest');
const app = require('../index');   // رجّع import كـ app فقط

it('GET /hello', async () => {
  const r = await request(app).get('/hello');
  expect(r.status).toBe(200);
  expect(r.text.toLowerCase()).toContain('hello world');
});

// (اختياري) اختبار /bye
it('GET /bye', async () => {
  const r = await request(app).get('/bye');
  expect(r.status).toBe(200);
  expect(r.text.toLowerCase()).toContain('bye bye');
});
