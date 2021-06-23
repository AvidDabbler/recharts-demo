/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from 'theme-ui'
import axios from 'axios'
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';



export default function Home() {
  const [data, setdata] = useState({})
  const getData = async () => {
    const request = await axios({
      type: 'get',
      url:'https://eo4sdg.mit.edu/server/rest/services/GKA/LakeNokuoueNew/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson',
      type: 'application/json'
    });
    return await request.data.features
  };
  const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload)
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="label">{`${payload[1].name} : ${payload[1].value}`}</p>

        </div>
      );
    }
  
    return null;
  };
  
  const formatXAxis = (tickItem) => {
    return new Date(parseInt(tickItem));
  }

  useEffect(() => {
    getData().then(data =>{
      setdata(data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1>Chart #1</h1>
            <LineChart
              data={data}
              width={700}
              height={400}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="Date" interval={30}>
                <Label value="Temperature and Salinity of Water Testing Sites" 
                offset={0} 
                position="insideBottom" 
                style={{fill: 'white', margin: '10px'}} />
              </XAxis>
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="attributes.Temp" stroke="#8884d8" activeDot={{ r: 8 }} name='Temperature' dot={false} />
              <Line type="monotone" dataKey="attributes.Sal" stroke="#fff" activeDot={{ r: 8 }} name='Salinity' dot={false} />
            </LineChart>
      
      <div>
        <Button sx={{variant: 'button'}}>
            <Link href="/slide9">
            <a>Back</a>
            </Link>

        </Button>

        <Button sx={{variant: 'button'}}>
            <Link href="/chart_two">
            <a>Next</a>
            </Link>
        </Button>

      </div>
    </div>
  )
}
