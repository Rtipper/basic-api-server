'use strict';

const supertest = require('supertest');
const { response } = require('express');

const server = require('../src/server.js');

const request = supertest(server.app);

//CLOTHES TESTS
describe('TESTING FOR CLOTHES ROUTES', () => {
  it('should return 404 on a bad route', async () => {
    await request.get('/notarealroute')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('WILL RETURN 404 MSG', async () => {
    await request.delete('/clothes')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('WILL VERIFY CREATION VIA POST ROUTE', async () => {
    const data = {
      type: 'shirt',
      color: 'black',
      size: 'large'
    }
    await request.post('/clothes').send(data)
      .then(result => {
        expect(result.status).toEqual(201);

        expect(result.body.id).toBeDefined();
        expect(result.body.record.color).toEqual('black')

        Object.keys(result.body.record).forEach(key => {
          expect(result.body.record[key]).toEqual(data[key])
        })
      })
  })


  // OBJECT ADDED FROM POST CARRIES OVER TO THE NEXT TEST
  it('WILL RETURN RECORDS VIA GET METHOD', async () => {
    await request.get('/clothes')
      .then(result => {
        console.log(result.body)
        expect(result.status).toBe(200);

        expect(Array.isArray(result.body)).toBeTruthy()
      })
  })

  it('WILL RETURN SINGLE RECORD VIA GET METHOD', async () => {
    await request.get('/clothes/1')
      .then(result => {
        expect(result.status).toBe(200);
        expect(typeof result.body).toEqual('object');
        expect(result.body.id).toEqual(1);
      })
  })

  it('WILL UPDATE RECORD VIA PUT METHOD', async () => {
    const data = { type: 'hat', color: 'blue', size: '3/4' };
    await request.put('/clothes/1').send(data)
      .then(result => {
        expect(result.status).toBe(200);
        expect(result.body.id).toEqual(1)
        expect(result.body.record.type).toEqual('hat')
      })
  })

  it('WILL REMOVE A RECORD VIA DELETE METHOD', async () => {
    await request.delete('/clothes/1')
      .then(result => {
        expect(result.status).toBe(204);
        expect(result.body.record).toBeFalsy();
      })

    await request.get('/clothes')
      .then(result => {
        expect(result.body.length).toEqual(0);
      })
  })
});

// FOOD TESTS
describe('TESTING FOR FOOD ROUTES', () => {
  it('WILL RETURN 404 MSG', async () => {
    await request.get('/notarealroute')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('WILL RETURN 404 MSG', async () => {
    await request.delete('/food')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('WILL VERIFY RECORD HAS BEEN CREATED VIA POST ROUTE', async () => {
    const data = {
      type: 'dinner',
      food: 'pizza',
      qty: '1'
    }
    await request.post('/food').send(data)
      .then(result => {
        expect(result.status).toEqual(201);
        expect(result.body.id).toBeDefined();
        expect(result.body.record.food).toEqual('pizza')


        Object.keys(result.body.record).forEach(key => {
          expect(result.body.record[key]).toEqual(data[key])
        })
      })
  })


  // OBJECT ADDED FROM POST CARRIES OVER TO THE NEXT TEST
  it('WILL RETURN LIST OF RECORDS VIA GET METHOD', async () => {
    await request.get('/food')
      .then(result => {
        console.log(result.body)
        expect(result.status).toBe(200);
        expect(Array.isArray(result.body)).toBeTruthy()
      })
  })

  it('WILL RETURN A RECORD VIA GET METHOD', async () => {
    await request.get('/food/1')
      .then(result => {
        expect(result.status).toBe(200);
        expect(typeof result.body).toEqual('object');
        expect(result.body.id).toEqual(1);
      })
  })

  it('WILL UPDATED RECORD VIA PUT METHOD', async () => {
    const data = { type: 'breakfast', food: 'bacon', qty: '1' };
    await request.put('/food/1').send(data)
      .then(result => {
        expect(result.status).toBe(200);
        expect(result.body.id).toEqual(1)
        expect(result.body.record.type).toEqual('breakfast')
      })
  })

  it('WILL REMOVE A RECORD VIA DELETE METHOD', async () => {
    await request.delete('/food/1')
      .then(result => {
        expect(result.status).toBe(204);
        expect(result.body.record).toBeFalsy();
      })

    await request.get('/clothes')
      .then(result => {
        expect(result.body.length).toEqual(0);
      })
  })
});