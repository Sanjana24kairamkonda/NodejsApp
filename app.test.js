// app.test.js

const request = require('supertest');
const app = require('./index'); // Import the app
const portfinder = require('portfinder');

let server;

beforeAll(async () => {
  // Find an available port dynamically
  const port = await portfinder.getPortPromise();
  process.env.PORT = port;  // Set the dynamic port as the environment variable

  // Start the server before all tests
  server = app.listen(port);
});

afterAll(() => {
  // Close the server after all tests
  server.close();
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
    expect(response.status).toBe(200);
  });
});

