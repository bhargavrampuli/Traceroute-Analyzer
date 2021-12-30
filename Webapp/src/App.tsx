import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import trdata from "./data/tracedata.json";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import type { ResponseData, IUList, GList, iData } from "./types";
import Map_test from "./components/Map_test";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import LineChart from "./components/LineChart";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<ResponseData>();

  const fetchData = async () => {
    const result = await fetch("http://18.223.114.82/pastfive");
    const data: ResponseData = await result.json();

    setData(data);
    // console.log(data[1].array_google);

    var fs = require("browserify-fs");
    fs.writeFile(
      "./data/tracedata.json",
      "Cool, I can do this in the browser!",
      function (_err: any) {
        fs.readFile(
          "Output.txt",
          function (_err: any, contents: { toString: () => any }) {
            console.log(contents.toString());
          }
        );
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(trdata[1]['google.com']);
  return (
    <div id="sample">
      <div id="heading">
        <h1>TraceRoute Analysis</h1>
      </div>
      <div id="g_heading">
        <h2> Pinging to Google.com </h2>
      </div>

      <div id="mapchartwrapper">
      <div id="chartwrapper">
        <LineChart google_list={data?.[1].array_google} />
        <LineChart google_list={data?.[2].array_google} />
        <LineChart google_list={data?.[3].array_google} />
        <LineChart google_list={data?.[4].array_google} />
        <LineChart google_list={data?.[5].array_google} />
        </div>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.[1].array_google.map((trset) => (
            <Marker
              key={trset.unique_id}
              position={[trset.latitude, trset.longitude]}
            />
          ))}
        </MapContainer>
      </div>

      <div id="g_heading">
        <h2> Pinging to IU.edu </h2>
      </div>

      <div id="mapchartwrapper">
      <div id="chartwrapper">
        <LineChart google_list={data?.[1].array_iu} />
        <LineChart google_list={data?.[2].array_iu} />
        <LineChart google_list={data?.[3].array_iu} />
        <LineChart google_list={data?.[4].array_iu} />
        <LineChart google_list={data?.[5].array_iu} />
        </div>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.[1].array_iu.map((trset) => (
            <Marker
              key={trset.unique_id}
              position={[trset.latitude, trset.longitude]}
            />
          ))}
        </MapContainer>
      </div>

      <script></script>
    </div>
  );
};

export default App;
