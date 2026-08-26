import { useState, useEffect } from "react";
export default function Sports() {
    const [selected, setSelected] = useState("spirit");
    const [mlb, setMlb] = useState();
    const [nwsl, setNWSL] = useState([]);

    useEffect(() => {
    fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104")
        .then(r => r.json())
        .then(setMlb);
    }, []);

    useEffect(() => {
        fetch("https://site.api.espn.com/apis/v2/sports/soccer/usa.nwsl/standings")
        .then(r => r.json())
        .then(d => setNWSL(d.children?.[0]?.standings?.entries || []));
    }, []);

    const table = () => {
        if(selected === "spirit") {
            return(
                <div>
                    <div className="tableTitle">NWSL Regular Season Standings</div>

                    <table className="standings">
                        <thead>
                        <tr>
                            <td>Team</td>
                            <td>Wins</td>
                            <td>Losses</td>
                            <td>Ties</td>
                            <td>Points</td>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {nwsl.map((t, i) => {
                            const s = Object.fromEntries(t.stats.map(x => [x.name, x.value]))
                            return <tr key={t.team.id} style={t.team.displayName === "Washington Spirit" ? {fontWeight: "bold"}:{}}>
                            <td>{t.team.displayName}</td>
                            <td>{s.wins}</td>
                            <td>{s.losses}</td>
                            <td>{s.ties}</td>
                            <td>{s.points}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            if (mlb?.records[4].standingsType === "regularSeason") {
               return(
                <div>
                    <div className="tableTitle"> {mlb?.records[4].teamRecords[0].season} Regular Season NL Central Standings</div>
                    <table className="standings">
                        <thead>
                            <tr>
                                <td>Team</td>
                                <td>GB</td>
                                <td>Wins</td>
                                <td>Losses</td>
                                <td>Pct</td>
                                <td>Playoffs Clinched</td>

                            </tr>
                        </thead>
                        <tbody>
                            
                            {mlb?.records[4].teamRecords.map(t => (
                            <tr style={t.team.name === "Cubs" ? {fontWeight: "bold"}:{}} key={t.team.id}>
                                <td >{t.team.name}</td>
                                <td>{t.leagueGamesBack}</td>

                                <td>{t.wins}</td>
                                <td>{t.losses}</td>
                                <td>{t.winningPercentage}</td>
                                <td>{t.clinched ? "yes" : "no"}</td>


                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               
            ) 
            } else {
                return(<div> MLB regular season is over. </div>)
            }
            
        }
    }
    return(
        <article>
            <h1>Sports</h1>
            <div className="sportSelectionBox">
                <div className="sportSelection" style={selected === "spirit" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("spirit")}>Washington Spirit</div>
            <div className="sportSelection" style={selected === "cubs" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("cubs")}>Chicago Cubs</div>
            </div>
           {table()}
        </article>
    );
}