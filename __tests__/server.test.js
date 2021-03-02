// PER CODE REVIEW DEMO

'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('404 on failed route', () => {

    return mockRequest
    .get('/foobar')
    .then(results => {
      expect(results.status).toBe(404);
    });

  });

  it('404 on invalid method', async () => {
    const response = await mockRequest.put('/food');
    expect(response.status).toBe(404);
  });

  it('creates record', async () => {
    const data = {
      name: 'carrots',
      calories: 25,
      type: 'vegetable'
    };

    const response = await (await mockRequest.post('/food')).send(data);
    expect(response.body.id).toBeDefined();
    Object.keys(response.body.data).forEach(key => {
      expect(response.body.data[key]).toEqual(data[key])
    })
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a record', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
  });

  it('can update a record', async () => {
    const data = { name: "Broccoli" };
    const response = await mockRequest.put('/food/1').send(data);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual("Broccoli");
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeFalsy();

    const getResponse = await mockRequest.get('/food');
    expect(getResponse.body.length).toEqual(0);

  });
});
