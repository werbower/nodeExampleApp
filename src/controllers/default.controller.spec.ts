import {describe, expect, it } from 'vitest'
import request from 'supertest'
import {app } from '../index.js'

describe('def controller', () => {
  it ('get / returns hello', async ()=> {
    const res = await request(app).get('/')

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({message: expect.stringMatching(/hello/)})
  })

  it ('get /health returns healthy', async ()=> {
    const res = await request(app).get('/health')

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({status: expect.stringMatching(/healthy/)})
  })

})