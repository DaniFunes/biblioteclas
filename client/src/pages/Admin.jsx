import Form from "../components/commons/Form";
import bibliotecasServices from "../services/bibliotecasServices";
import { toast } from 'react-toastify'
// import config from '../config.json'
import { Link } from '../components/lib'
import { Typography } from "@mui/material";

function Admin() {
	const handleCreate = (data) => {
		bibliotecasServices
			.createBiblioteca(data)
			.then(() => {
				toast.success('Creado', config.toastSettings)
			})
			.catch((err) => console.log('hola'))
	}

	return (
		<>
			<Typography marginTop="3" variant="h4">Crear biblioteca</Typography>
            <Form
				inputs={[{ name: 'nombre', label: 'Nombre' }, { name: 'ciudad', label: 'Ciudad' }]}
				submitLabel="Crear"
				onSubmit={handleCreate}
				isResetAfterSubmit
			/>

			{/* <Link to="/products">Volver</Link> */}
		</>
	)
}
export default Admin
