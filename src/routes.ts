import { Router } from 'express'

const router = Router()

router.get('/users', async (request, response) => response.send('working'))

export { router as routes }
