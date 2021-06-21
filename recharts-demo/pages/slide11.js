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
            <h1>Built with</h1>
            <p>
                <ul>
                    <li>NextJS</li>
                    <li>ThemeUI</li>
                    <li>Recharts</li>
                </ul>
            </p>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/chart_two">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
