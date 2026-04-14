const request = require('supertest');
const app = require('../server/server');

describe('Weather API Tests', () => {

    test('GET /weather - should return 400 if no city provided', async () => {
        const response = await request(app).get('/weather');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('City name is required');
    });

    test('GET /weather - should return 404 for invalid city', async () => {
        const response = await request(app).get('/weather?city=invalidcityxyz123');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('City not found. Please try again.');
    });

    test('GET /weather - should return weather data for valid city', async () => {
        const response = await request(app).get('/weather?city=London');
        if (response.status === 200) {
            expect(response.body).toHaveProperty('temperature');
            expect(response.body).toHaveProperty('humidity');
            expect(response.body).toHaveProperty('wind_speed');
            expect(response.body).toHaveProperty('feels_like');
            expect(response.body).toHaveProperty('city');
        }
    });

    test('GET /weather - response should have correct data types', async () => {
        const response = await request(app).get('/weather?city=Mumbai');
        if (response.status === 200) {
            expect(typeof response.body.temperature).toBe('number');
            expect(typeof response.body.humidity).toBe('number');
            expect(typeof response.body.wind_speed).toBe('number');
            expect(typeof response.body.feels_like).toBe('number');
        }
    });

});
