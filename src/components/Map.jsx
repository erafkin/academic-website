import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const places = [
  { name: "Chimney Top, WV", pos: [38.9728871,-79.2659174], note: "my favorite hike in WV!", src: "/hikes/chimney_top.jpeg" },
  { name: "Tibbet Knob, WV", pos: [38.9145541,-78.7156163], note: "I got engaged here!",  src: "/hikes/tibbet_knob.jpeg"},
  { name: "Big Schloss, VA", pos: [38.9406646,-78.6761701], note: "engagement party", src: "/hikes/big_schloss.jpeg" },
  { name: "Annapolis Rock, MD", pos: [39.2817717,-77.1316477], note: "great quick hike", src: "/hikes/annapolis_rock.jpeg" },
  {name: "Old Tag, VA", pos: [38.5517329,-78.3261049], note: "it's famous for a reason!", src: "hikes/old_rag.jpeg"},
  { name: "Mount Moosilauke, NH", pos: [44.0245099,-71.8412385], note: "7/4/2019 it was pink", src: "/hikes/moosilauke.jpeg"},
  { name: "Mount Cardigan, NH", pos: [43.6497939,-71.925126], note: "great bald face", src: "/hikes/cardigan.jpeg"},
    { name: "Mount Major, NH", pos: [43.5117443,-71.2976125], note: "", src: "/hikes/major.jpeg"},
    { name: "Mount Hunger, VT", pos: [44.3956103,-72.6554358], note: "VT leaf peeping doesn't get much better than this!", src: "/hikes/hunger.jpeg"},
  {name: "Angel's Landing, UT", pos: [37.2690316,-112.9572201], note: "my mom is very cool & brave", src: "hikes/angels_landing.jpeg"},
  {name: "Bryce Canyon, UT", pos: [37.5837387,-112.3559607], note: "my mom was very cold", src: "hikes/bryce.jpeg"},
  {name: "Isle Royale, MI", pos: [48.0072981,-88.9939511], note: "look ma its canada", src: "hikes/isle.jpeg"},
  {name: "Porcupine Mountains, MI", pos: [46.8046224,-89.7605042], note: "first place I ever hiked!", src: "hikes/porkies.jpeg"},
  {name: "Pictured Rocks, MI", pos: [46.5687756,-86.3212179], note: "don't underestimate the midwest", src: "hikes/pictured_rocks.jpeg"},
  {name: "Indiana Dunes, IN", pos: [41.6532678,-87.0905426], note: "I don't want to hear it until you've done the 3 dune challenge", src: "hikes/dunes.jpeg"},
    {name: "Starved Rock, IL", pos: [ 41.3127749,-88.9749854], note: "There are canyons in IL", src:"hikes/starved_rock.jpeg"},
    {name: "Talkeetna Mountains, AK", pos: [ 62.0333322,-147.9103212], note: "wowza", src:"hikes/alaska.jpeg"},
    {name: "Kotor, Montenegro", pos: [ 42.4126759,18.7724797], note: "switchback central!", src:"hikes/kotor.jpeg"},
        {name: "Theth, Albania", pos: [ 42.4020335,19.7185845], note: "The most beautiful place I have ever been to", src:"hikes/theth.jpeg"},
                {name: "Theth, Albania", pos: [ 42.4020335,19.7185845], note: "The most beautiful place I have ever been to", src:"hikes/theth.jpeg"},
        {name: "Theth, Albania", pos: [ 42.4020335,19.7185845], note: "The most beautiful place I have ever been to", src:"hikes/theth.jpeg"},
        {name: "Badlands, SD", pos: [ 43.683279,-102.5472219], note: "Windy day in the alien landscape", src:"hikes/badlands.jpeg"},
        {name: "Medicine Rocks, MT", pos: [ 46.0443947,-104.4733164], note: "I have never in my life seen anything like this.", src:"hikes/medicine_rocks.jpeg"},
                {name: "Medicine Rocks, MT", pos: [ 47.2587854,-103.7981062], note: "The land of prarie dogs and buffalo.", src:"hikes/ND.jpeg"},
];

export default function Map() {
  return (
    <MapContainer center={[41.8335923,-87.8970266]} zoom={4} className="map">
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(p => (
        <Marker key={p.name} position={p.pos}>
          <Popup><div>
            <p>{p.name}</p>
            <p>{p.note}</p>
            {
                p.src?
                <img
                    className="popupImage"
                    src={p.src}
                    alt={`picture of ${p.name}`}
                    />: null
            }  
            </div></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}