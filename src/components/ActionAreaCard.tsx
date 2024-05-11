"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface BookInformation {
  image: any;
  title: string;
  author: string;
  type: string;
  status: string;
  price: string;
}

export const ActionAreaCard: React.FC<BookInformation> = ({
  image,
  title,
  author,
  type,
  status,
  price,
}) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea sx={{ px: 1, py: 2 }}>
        <CardMedia
          component="img"
          height="60"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tác giả: {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thể loại: {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Trạng thái: {status}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Giá tiền: {price}VND
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;