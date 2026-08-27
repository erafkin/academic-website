import { albums } from "../data/music.js";
import { useEffect, useState } from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
export default function Music() {
    const url = `https://docs.google.com/spreadsheets/d/1E2q73AtI9Ju3seLqDp06wFH5DngWC6RP1bebQzInduk/gviz/tq?tqx=out:json`;
    const [data, setData] = useState()
    const [page, setPage] = useState(0);
    const [chartMode, setChartMode] = useState("venue");


    useEffect(() => {
        const poll = async () => {
            const text = await fetch(url).then(r => r.text());
            const json = JSON.parse(text.substring(47).slice(0, -2));
            setData(json.table.rows);
        };
        if (!data) {
            poll()
        }
        }, []
    )
    const parseDate = value => {
        const m = value?.match?.(/Date\((\d+),(\d+),(\d+)\)/);
        return m
            ? new Date(+m[1], +m[2], +m[3]).toLocaleDateString()
            : value;
    };
    if (!data) {
        return <div>Loading...</div>
    }

    const pageSize = 5;

    const start = page * pageSize;
    const pageData = data.toReversed().slice(start, start + pageSize);
    const eventsOverTime = Object.entries(
        data.reduce((acc, row) => {
            const date = parseDate(row.c[2]?.v);
            const year = date ? new Date(date).getFullYear() : null;
            const festival = row.c[6]?.v;
            if (year && !festival) {
                acc[year] = (acc[year] || 0) + 1;
            }
            return acc;
        }, {})
        )
        .sort(([a], [b]) => a - b)
        .map(([year, count]) => ({ year, count }));
    const bandCounts = Object.entries(
        data.reduce((acc, row) => {
            const band = row.c[0]?.v?.trim();
            const openers = row.c[1]?.v
            ?.split(',')
            .map(x => x.trim())
            .filter(Boolean) || [];

            if (band) acc[band] = (acc[band] || 0) + 1;
                openers.forEach(opener => {
            acc[opener] = (acc[opener] || 0) + 1;
            });

            return acc;
        }, {})
        )
        .sort((a, b) => b[1] - a[1])
        .map(([band, count]) => (count > 1 ? { band, count } : null));
    const venueCounts = Object.entries(
        data.reduce((acc, row) => {
            const venue = row.c[3]?.v?.trim();
            const festival = row.c[6]?.v;

            if (venue && !festival) {
                acc[venue] = (acc[venue] || 0) + 1;
            }

            return acc;
        }, {})
        )
        .sort((a, b) => b[1] - a[1])
        .map(([venue, count]) => ((count > 1 ? { venue, count } : null)));
    const cityCounts = Object.entries(
        data.reduce((acc, row) => {
            const value = row.c[4]?.v?.trim(); // column 5
            const festival = row.c[6]?.v;

            if (value && !festival) {
                acc[value] = (acc[value] || 0) + 1;
            }
            return acc;
        }, {})
    )
    .sort((a, b) => b[1] - a[1])
    .map(([city, count]) => ({ city, count }));
    
    const chartData = chartMode === "venue" ? venueCounts : cityCounts;

    return (
    <>
       
        <h3>Number of concerts over time (2016-present, excluding festivals)</h3>
        <LineChart width={600} height={300} data={eventsOverTime}>
            <XAxis dataKey="year" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>

        
        
         <h3>Bands seen multiple times (including openers)</h3>
        <BarChart width={600} height={500} data={bandCounts} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" allowDecimals={false} />
        <YAxis dataKey="band" type="category" width={150}/>
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
        <h3>Top {chartMode === "venue" ? "Venues" : "Cities"}</h3>
        <div className="projectSelectionBox">
                <div className="projectSelection" style={chartMode === "venue" ? {textDecoration: "underline"} : {}} onClick={()=>setChartMode("venue")}>Venues</div>
                <div className="projectSelection" style={chartMode === "city" ? {textDecoration: "underline"} : {}} onClick={()=>setChartMode("city")}>Cities</div>
            </div>


        <BarChart width={600} height={600} data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" allowDecimals={false} />
            <YAxis
                type="category"
                dataKey={chartMode === "venue" ? "venue" : "city"}
                width={150}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>

        <h3>All data (Present-2016)</h3>
        <table className="standings">
            <thead>
                <tr>
                    <th>Band</th> 
                    <th>Opener(s)</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>City</th>
                </tr>
                
            </thead>
            <tbody>
                
                {pageData.map((t, i) => (
                <tr key={start + i}>
                    {t.c.map((d, i) => (
                        <td key={i}>
                            {i === 2 && d?.v
                            ? parseDate(d.v)
                            : d?.v ?? null}
                        </td>
                        ))}
                </tr>
                ))}
            </tbody>
        </table>
        <div className="projectSelectionBox">
    
        <div className="button" style= {page === 0 ? {color: "var(--bg)"}: null} onClick={() => page !== 0 ? setPage(p => p - 1) : null}>
                Prev
        </div>

                <span> Page {page + 1} </span>

                <div className="button"
                style= {start + pageSize >= data.length ? {color: "var(--bg)"}: null}
                onClick={() => start + pageSize < data.length ? setPage(p => p + 1): null}
                >
                Next
                </div>
        </div>
      
    </>
    );
}