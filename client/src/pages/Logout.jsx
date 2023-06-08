import { useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth'
import authService from '../services/authService'
import { useEffect } from 'react'


function Logout() {
	const [user, dispatch] = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		authService.logout()
		dispatch({ type: 'LOGOUT' })
		navigate("/login")
	}, [])

	return false
}

export default Logout
