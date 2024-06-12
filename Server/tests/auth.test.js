const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Auth API', () => {
    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/v1/auth/register')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                password: 'password',
                role: 'user'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHave
        expect(res.body).toHaveProperty('token');
    });

    it('should log in a user', async () => {
        const user = await User.create({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password',
            role: 'user'
        });

        const res = await request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'test@example.com',
                password: 'password'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should not log in a user with wrong password', async () => {
        const res = await request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'test@example.com',
                password: 'wrongpassword'
            });
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('error');
    });

    it('should log out a user', async () => {
        const res = await request(app)
            .post('/api/v1/auth/logout');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token', null);
    });
});

