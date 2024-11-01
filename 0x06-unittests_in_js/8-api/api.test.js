const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API Tests', () => {
  describe('Index Page', () => {const request = require('request');
    const { expect } = require('chai');
    
    describe('API integration test', () => {
      const API_URL = 'http://localhost:7865';
    
      it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome to the payment system');
          done();
        });
      });
    });
    it('Should return status code 200', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
    });

    it('Should return the message "Welcome to the payment system"', async () => {
      const res = await request(app).get('/');
      expect(res.text).to.equal('Welcome to the payment system');
    });

    it('Should not return an incorrect message', async () => {
      const res = await request(app).get('/');
      expect(res.text).to.not.equal('Incorrect message');
    });
  });
});
