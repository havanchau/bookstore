"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea sx={{ px: 1, py: 2 }}>
        <CardMedia
          component="img"
          height="60"
          image="./images/book-image.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bí mật của may mắn
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tác giả: Alex Rovira
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thể loại: Khác, Phương Tây
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Trạng thái: Full
          </Typography>
        <Typography variant="h6" color="text.secondary">
          Giá tiền: 2,000VND
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
