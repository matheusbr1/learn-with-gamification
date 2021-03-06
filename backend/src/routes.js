import { Router } from 'express'

import UserController from './app/controllers/UserController'
import ChallengeController from './app/controllers/ChallengeController'
import AuthController from './app/controllers/AuthController'

import auth from './app/middleware/auth'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Welcome" })
})

// Create User
routes.post('/users', UserController.store)

// List users
routes.get('/users', UserController.list)

// List users by index
routes.get('/users/:index', UserController.listByIndex)

// Update User 
routes.put('/users/:index', auth, UserController.update)

// Delete User
routes.delete('/users/:index', auth, UserController.delete)

// Create Challenge
routes.post('/challenges', auth, ChallengeController.store)

// List All Challenges
routes.get('/challenges', auth, ChallengeController.index)

// List a Challente by index
routes.get('/challenges/:index', auth, ChallengeController.listByIndex)

// Challenge Update
routes.put('/challenges/:index', auth, ChallengeController.update)

// Challenge Delete
routes.delete('/challenges/:index', auth, ChallengeController.update)

// AUTENTICAÇÃO
routes.post('/auth', AuthController.sign)

export default routes