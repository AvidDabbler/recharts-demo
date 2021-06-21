/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from 'theme-ui'
import axios from 'axios'
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';



export default function Home() {
  const [data, setdata] = useState({})
  const getData = async () => {
    const request = await axios({
      type: 'get',
      url:'https://eo4sdg.mit.edu/server/rest/services/GKA/Drying_sites2/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=harvest_2016%2Charvest_2017%2Charvest_2018%2Charvest_2019%2Charvest_2020&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson',
      type: 'application/json'
    });
    return await request.data.features
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
      <h1>Chart #2</h1>
      <div className='chartContainer'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="Date" interval={120}>
                <Label value="Harvest Data" offset={0} position="insideBottom" style={{fill: 'white', margin: '10px'}} />
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="attributes.harvest_2016" stroke="#f4f1de" activeDot={{ r: 8 }} name='2016' dot={false} />
              <Line type="monotone" dataKey="attributes.harvest_2017" stroke="#e07a5f" activeDot={{ r: 8 }} name='2017' dot={false} />
              <Line type="monotone" dataKey="attributes.harvest_2018" stroke="#81b29a" activeDot={{ r: 8 }} name='2018' dot={false} />
              <Line type="monotone" dataKey="attributes.harvest_2019" stroke="#f2cc8f" activeDot={{ r: 8 }} name='2019' dot={false} />
              <Line type="monotone" dataKey="attributes.harvest_2020" stroke="#bdb2ff" activeDot={{ r: 8 }} name='2020' dot={false} />
            </LineChart>
          </ResponsiveContainer>
      </div>
      
      <div>
        <Button sx={{variant: 'button'}}>
            <Link href="/chart_one">
            <a>Back</a>
            </Link>

        </Button>

        <Button sx={{variant: 'button'}}>
            <Link href="/slide10">
            <a>Next</a>
            </Link>
        </Button>

      </div>
    </div>
  )
}
