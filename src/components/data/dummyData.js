import Warsaw from "../../image/Warsaw.png";
import London from "../../image/London.png";
import Berlin from "../../image/Berlin.png";
import Paris from "../../image/Paris.png";
import Madrid from "../../image/Madrid.png";
import Rome from "../../image/Rome.png";
import Lisbon from "../../image/Lisbon.png";
import Moscow from "../../image/Moscow.png";
import Kiev from "../../image/Kiev.png";
import Athens from "../../image/Athens.png";
import Copenhagen from "../../image/Copenhagen.png";
import Helsinki from "../../image/Helsinki.png";
import Oslo from "../../image/Oslo.png";

import CloudyDay1 from "../../image/animated/cloudy-day-1.svg";
import CloudyDay2 from "../../image/animated/cloudy-day-2.svg";
import Day from "../../image/animated/day.svg";
import Cloudy from "../../image/animated/cloudy.svg";
import Snowy1 from "../../image/animated/snowy-1.svg";
import Thunder from "../../image/animated/thunder.svg";

export const ICON_MAP = new Map();

addMapping([0, 1], Day);
addMapping([2], CloudyDay1);
addMapping([3], Cloudy);
addMapping([45, 48], Cloudy);
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81], CloudyDay2);
addMapping([71, 73, 75, 77], Snowy1);
addMapping([95, 96, 99], Thunder);

const dataPlaces = [
  {
    city: "Warsaw",
    lat: 52.2297,
    lon: 21.0122,
    timezone: "Europe/Berlin",
    img: Warsaw,
  },
  {
    city: "London",
    lat: 51.5074,
    lon: -0.1278,
    timezone: "Europe/London",
    img: London,
  },
  {
    city: "Berlin",
    lat: 52.52,
    lon: 13.405,
    timezone: "Europe/Berlin",
    img: Berlin,
  },
  {
    city: "Paris",
    lat: 48.8566,
    lon: 2.3522,
    timezone: "Europe/Paris",
    img: Paris,
  },
  {
    city: "Madrid",
    lat: 40.4168,
    lon: -3.7038,
    timezone: "Europe/Madrid",
    img: Madrid,
  },
  {
    city: "Rome",
    lat: 41.9028,
    lon: 12.4964,
    timezone: "Europe/Rome",
    img: Rome,
  },
  {
    city: "Lisbon",
    lat: 38.7223,
    lon: -9.1393,
    timezone: "Europe/Lisbon",
    img: Lisbon,
  },
  {
    city: "Moscow",
    lat: 55.7558,
    lon: 37.6173,
    timezone: "Europe/Moscow",
    img: Moscow,
  },
  {
    city: "Kiev",
    lat: 50.4501,
    lon: 30.5234,
    timezone: "Europe/Kiev",
    img: Kiev,
  },
  {
    city: "Athens",
    lat: 37.9838,
    lon: 23.7275,
    timezone: "Europe/Athens",
    img: Athens,
  },
  {
    city: "Copenhagen",
    lat: 55.6761,
    lon: 12.5683,
    timezone: "Europe/Copenhagen",
    img: Copenhagen,
  },
  {
    city: "Helsinki",
    lat: 60.1699,
    lon: 24.9384,
    timezone: "Europe/Helsinki",
    img: Helsinki,
  },
  {
    city: "Oslo",
    lat: 59.9139,
    lon: 10.7522,
    timezone: "Europe/Oslo",
    img: Oslo,
  },
];

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

export default dataPlaces;
