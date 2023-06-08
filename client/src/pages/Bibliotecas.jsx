import bibliotecasServices from "../services/bibliotecasServices";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Bibliotecas() {
  const [bibliotecas, setBibliotecas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    bibliotecasServices
      .getAllBibliotecas()
      .then(({ data }) => setBibliotecas(data))
      .catch(() => navigate(-1));
  }, []);

  const handleDelete = (biblioteca) => {
    bibliotecasServices.deleteBiblioteca(biblioteca._id).then(() => {
				setBibliotecas(bibliotecas.filter((b) => b._id !== biblioteca._id))
				toast.success('Borrado con exito', config.toast)
			})
		}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid container spacing={2}>
      {bibliotecas.map((biblioteca) => (
        <Grid key={biblioteca._id} item xs={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {biblioteca.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ciudad: {biblioteca.ciudad}
              </Typography>
              <Button onClick={handleDelete} variant="contained">Borrar</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default Bibliotecas;
