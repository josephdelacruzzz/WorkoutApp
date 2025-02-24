import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {logout} = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()

    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && ( //when there is a user this is shown
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && ( //when there is not user this is shown
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>

            </div>
        </header>
    )
}

export default Navbar