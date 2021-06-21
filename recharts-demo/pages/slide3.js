/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import theme from '../theme'
import { Button } from 'theme-ui'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>About ReCharts</h1>
            <div sx={{vartiant: 'slideText'}}>
                <p sx={{variant: 'p'}}>ReCharts is a popular charting and Data Visualization library that has taken the liberty to standardize the way that charts are made and focuses on charts that are built using a Parent Child method rather than targeting a div.</p>
            </div>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide2">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide4">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
