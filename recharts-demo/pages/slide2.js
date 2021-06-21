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
            <h1>The Pareto principle</h1>
            <div sx={{vartiant: 'slideText'}}>
                <p sx={{variant: 'p'}}>This principle is able to be applied to all sorts of issues crossing industries and is often looked at as a guiding principle to simplify and streamline operation issues from business to sports.</p>
            </div>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide1">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide3">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
