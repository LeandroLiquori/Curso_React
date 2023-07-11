import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="tarjetas">
      <Card sx={{ width: 300 }}>
        <CardMedia sx={{ height: 250 }} image={item.img} title="green iguana" />
        <CardContent className="title">
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions className="boton">
          <Link to={`/detalle/${item.id}`}>
            <Button size="small" variant="contained">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
