const { get } = require('../todo-service')
const mysql = require('mysql2/promise')

// mock mysql2/promise module
jest.mock('mysql2/promise')

test('get todo', async () => {
  // mock connection.query function
  const mockQuery = jest.fn()
  mockQuery.mockImplementation(() => ([[{ content: 'hello, world!', id: 1 }], ['mock fields']]))

  // mock createConnection function
  mysql.createConnection.mockResolvedValue({ query: mockQuery, end: jest.fn() })

  await expect(get()).resolves.toMatch(/hello, world!/)
})