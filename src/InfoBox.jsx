import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

export default function InfoBox({ info }) {
  const NORMAL_URL =
    "https://s1.1zoom.me/b6730/156/Sky_Clouds_Sun_559129_3840x2160.jpg";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
  const HOT_URL =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
  const COLD_URL =
    "https://www.ecclesiastical.com/Images/cold-weather-snowflake_tcm96-36410.jpg";

  return (
    <div
      className="infobox"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        left: "50%",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temprature > 30
              ? HOT_URL
              : info.temp < 8
              ? COLD_URL
              : NORMAL_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather information from {info.city} &nbsp;
            {info.humidity > 80 ? (
              <ThunderstormOutlinedIcon />
            ) : info.temprature > 30 ? (
              <WbSunnyOutlinedIcon />
            ) : info.temp < 8 ? (
              <AcUnitOutlinedIcon />
            ) : (
              <CloudOutlinedIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature : {info.temprature}&deg;C</p>
            <p>Mintemp : {info.min}&deg;C</p>
            <p>Maxtemp : {info.max}&deg;C</p>
            <p>Feels Like : {info.feelslike}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Weather : {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
