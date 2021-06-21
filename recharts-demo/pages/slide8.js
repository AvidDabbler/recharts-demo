/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import theme from '../theme'
import { Button } from 'theme-ui'
import Image from 'next/image'

import npmStats from '../public/npm.jpg'
import githubStats from '../public/github.jpg'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Chart Types</h1>
            <p>
                <ul>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/AreaChart' target="_blank" >AreaChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/BarChart' target="_blank" >BarChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/LineChart' target="_blank" >LineChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/ComposedChart' target="_blank" >ComposedChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/PieChart' target="_blank" >PieChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/RadarChart' target="_blank" >RadarChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/RadialBarChart' target="_blank" >RadialBarChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/ScatterChart' target="_blank" >ScatterChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/FunnelChart' target="_blank" >FunnelChart</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Treemap' target="_blank" >Treemap</a></li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/SankeyChart' target="_blank" >SankeyChart</a></li>
                </ul>
            </p>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide7">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide9">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
