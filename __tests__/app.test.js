const request = require('supertest')
const { app, server } = require('../app')

afterAll(() => {
  server.close()
})

test('get api', async () => {
  const response = await request(app).get('/todo')
  expect(response.body).toMatchObject({ result: 'do the homework' })
})