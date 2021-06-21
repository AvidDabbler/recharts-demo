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
            <h1>Summary</h1>
            <p>
                <ul>
                    <li>Can build 80% of the charts that you want</li>
                    <li>Meant to work well with React</li>
                    <li>Charts are made of components</li>
                    <li>Works well with Json & GeoJSON</li>
                    <li>Makes easy work of component customizations</li>
                    <li>Great documentation</li>
                </ul>
            </p>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/chart_two">
                        <a>Back</a>
                    </Link>

                </Button>

                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide11">
                        <a>Next</a>
                    </Link>
                </Button>

            </div>
        </div>
    )
}
