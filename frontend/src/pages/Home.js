import { useEffect } from "react" 
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext(); //add the function braces
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }

        }
        if (user) { //this makes sure that you can only go to /workouts if there is a user"
            fetchWorkouts()
        }

    }, [dispatch, user])
    return (
       <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workout) => (
                // <p key={workout._id}>{workout.title}</p>
                <WorkoutDetails key = {workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm/>
       </div> 
    )
}

export default Home