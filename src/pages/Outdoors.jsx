import { useState } from "react";
import Map from "../components/Map.jsx"

export default function Outdoors() {
    const [selected, setSelected] = useState("hiking");
    const [isHovered, setIsHovered] = useState(false);
    const hoverText = "Custom styled tooltip";
    const pageInside = () => {
        if (selected === "hiking") {
            return(
                <div>
                    I like to hike with my friends. Here are some favorites.
                    <Map/>
                </div>
            )

        } else if (selected === "biking") {
            return(
                <div>
                    I like to bike with my friends. One time I was bullied into bike packing, it was fun but hills are hard!
                </div>
            )
        } else if (selected === "climbing") {
            return(
                <div>
                    I was a competitive rock climber growing up! These days, I am very bad but I still like to climb outside with friends when I can.
                    <div>
                        <img
                            className="climbingVert"
                            src="/climbing/comp.jpg"
                            alt="picture of me bouldering as a teen"
                            title="picture of me bouldering as a teen"

                          />
                         
                          <img
                            className="climbingVert"
                            src="/climbing/WV.jpeg"
                            alt="Climbing in around Seneca Rocks, WV"
                            title="Climbing in around Seneca Rocks, WV"

                          />
                         
                          <img
                            className="climbing"
                            src="/climbing/team.jpeg"
                            alt="team champions"
                            title="Team champions"
                          />
                          
                          <img
                            className="climbing"
                            src="/climbing/new.jpeg"
                            alt="The New River Gorge in WV"
                            title="The New River Gorge in WV"
                          />
                           <img
                            className="climbing"
                            src="/climbing/outside.jpeg"
                            style={{width: "70%"}}
                            alt="Climbing at the Red River gorge as a teen"
                            title="Climbing at the Red River gorge as a teen"
                          />
                    </div>
                    
                </div>
            )
        } else{
            return null;
        }
    }
    return(
        <article>
            <h1>Outdoor Activities</h1>
            <div className="sportSelectionBox">
                <div className="projectSelection" style={selected === "hiking" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("hiking")}>Hiking</div>
                <div className="projectSelection" style={selected === "climbing" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("climbing")}>Climbing</div>
                {/* <div className="projectSelection" style={selected === "biking" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("biking")}>Biking</div> */}
            </div>
            {pageInside()}
            
        </article>
    );
    
}