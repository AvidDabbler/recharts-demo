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
            <div sx={{ variant: 'photoRow'}}>
                <div>
                    <Image src={WeeklyBubble} height={250} width={250} layout='intrinsic'
                    objectFit='contain' />
                    <p>Weekly Bubble Chart</p>
                </div>
                <div style={{paddingLeft: '40px'}}>
                    <Image src={Dashboard} height={250} width={250} layout='intrinsic'
                    objectFit='contain' />
                    <p>Dashboard</p>
                </div>
            </div>
            <div sx={{ variant: 'photoRow'}}>
                <div>
                    <Image src={CustomTooltip} height={250} width={250} layout='intrinsic'
                    objectFit='contain' />
                    <p>Custom Tooltip</p>
                </div>
                <div style={{paddingLeft: '40px'}}>
                    <Image src={DoubleAxis} height={250} width={250} layout='intrinsic'
                    objectFit='contain' />
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
