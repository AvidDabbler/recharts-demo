/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import theme from '../theme'
import { Button } from 'theme-ui'
import Image from 'next/image'

import WeeklyBubble from '../public/weekly-bubble.png'
import Dashboard from '../public/dashboard.png'
import CustomTooltip from '../public/custom-tooltip.png'
import DoubleAxis from '../public/double-axis.png'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Chart Types</h1>
            <div sx={{ variant: 'photoRow' }}>
                <div>
                    <a href='https://codesandbox.io/s/multi-bubble-chart-gb82x' target="_blank">

                        <Image src={WeeklyBubble} height={250} width={250} layout='intrinsic'
                            objectFit='contain' />
                    </a>

                    <p>Weekly Bubble Chart</p>
                </div>
                <div style={{ paddingLeft: '40px' }}>
                    <a href='https://codesandbox.io/s/71nz8w20qj' target="_blank">

                        <Image src={Dashboard} height={250} width={250} layout='intrinsic'
                            objectFit='contain' />
                    </a>

                    <p>Dashboard</p>
                </div>
            </div>
            <div sx={{ variant: 'photoRow' }}>
                <div>
                    <a href='https://codesandbox.io/s/tooltip-with-customized-content-lyxvs' target="_blank">

                        <Image src={CustomTooltip} height={250} width={250} layout='intrinsic'
                            objectFit='contain' />
                    </a>

                    <p>Custom Tooltip</p>
                </div>
                <div style={{ paddingLeft: '40px' }}>
                    <a href='https://codesandbox.io/s/line-chart-double-y-axes-4j73x' target="_blank">
                        <Image src={DoubleAxis} height={250} width={250} layout='intrinsic'
                            objectFit='contain' />
                    </a>
                    <p>Double Axis</p>
                </div>
            </div>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide7">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/chart_one">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
