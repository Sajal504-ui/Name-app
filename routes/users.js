import express from 'express'


import { createUser, getUser, getUsers, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router()



router.get('/', getUsers);

router.post('/', createUser);

// /Users/2 => req.params {id : 2}

router.get('/:id', getUser);

router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.get('/', getUser)

export default router;