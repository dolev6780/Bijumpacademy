import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pricingPlan from "../assets/PricingAllInOne.png";
import { title, list, subListContent } from "../contents/Sec6Content";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ImgMediaCard() {
  const navigate = useNavigate();

  const [isPay, setIsPay] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={pricingPlan}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ fontWeight: 700 }}>{subListContent}</Box>
        <Box variant="body2" color="text.secondary">
          {list}
        </Box>
        <Box variant="body2" color="text.secondary"></Box>
        {isPay ? (
          <Box variant="body2" color="text.secondary">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-pink-400 p-3 rounded-2xl text-white font-bold mt-4"
            >
              מעבר לקורס
            </button>
          </Box>
        ) : (
          <Box variant="body2" color="text.secondary">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-pink-400 p-3 rounded-2xl text-white font-bold mt-4"
            >
              לרכישה במחיר השקה 599 ש"ח
            </button>
            <Typography variant="h6" component="div">
              במקום <span className="line-through">749</span>
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
