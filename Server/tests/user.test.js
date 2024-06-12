const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const Organization = require('../models/Organization');
const jwt = require('jsonwebtoken');

let token;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const organization = await Organization.create({ name: 'Test Org' });
    const user = await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password',
        role: 'admin',
        organization: organization._id
    });

    token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User API', () => {
    it('should get all users', async () => {
        const res = await request(app)
            .get('/api/v1/users')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });

    it('should create a user', async () => {
        const res = await request(app)
            .post('/api/v1/users')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'New User',
                email: 'newuser@example.com',
                password: 'password',
                role: 'user',
                organization: organization._id
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('data');
    });

    it('should get a user by id', async () => {
        const user = await User.findOne({ email: 'newuser@example.com' });
        const res = await request(app)
            .get(`/api/v1/users/${user._id}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });

    it('should update a user', async () => {
        const user = await User.findOne({ email: 'newuser@example.com' });
        const res = await request(app)
            .put(`/api/v1/users/${user._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Updated User' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });

    it('should delete a user', async () => {
        const user = await User.findOne({ email: 'newuser@example.com' });
        const res = await request(app)
            .delete(`/api/v1/users/${user._id}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });
});
