import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard({title, cover, time}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 370,
        height:150,
        gap: 2,
        backgroundColor:"black"
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 100 }}>
        <img
          src={cover}
          srcSet=""
          loading="lazy"
          alt=""
        />
        
      </AspectRatio>
      <div className='w-[220px] text-white text-right'>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {title}
        </Typography>
       
        <Typography fontSize="md" sx={{fontWeight:"bold"}} aria-describedby="card-description" mb={1}>
         רמה: מתחילים
          </Typography>
          <Typography level="h1" fontSize="sm" id="card-description" mb={0.5}>
          {time}
        </Typography>
      </div>
    </Card>
  );
}
