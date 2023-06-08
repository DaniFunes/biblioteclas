import Form from '../components/commons/Form'
import { toast } from 'react-toastify'
import config from '../../config.json'
import { Link } from '../components/lib'
import Typography from "@mui/material/Typography";

import authService from '../services/authService'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [user, dispatch] = useAuth()
	const navigate = useNavigate()

	const handleLogin = async (data) => {
		const user = await authService.login(data)

		dispatch({ type: 'LOGIN', payload: user })
		navigate("/bibliotecas")
	}
	return (
		<>
			<Typography variant="h4">Login de usuario</Typography>
			<Form
				inputs={[
					{ name: 'username', label: 'Nombre de usuario' },
					{ name: 'password', label: 'Contraseña', type: 'password' },
				]}
				header={handleLogin}
				submitLabel="Entrar"
				onSubmit={handleLogin}
				isResetAfterSubmit
			/>
		</>
	)
}
export default Login
