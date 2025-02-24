const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//requires auth for all workout routes
router.use(requireAuth) //fires middleware func before running the funcs below
//ensures that the user is authenicated

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a single workout
router.post('/', createWorkout)

//DELETE a single workout
router.delete('/:id', deleteWorkout)

//UPDATE a single workout
router.patch('/:id', updateWorkout)

module.exports = router

