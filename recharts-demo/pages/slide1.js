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
                <p sx={{variant: 'p'}}>The Pareto Princile that states that 80% of consiquencies come from 20% of the problems. So if you are able to isolate and fix those 20% you will be able to solve 80% of your problems.</p>
            </div>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide2">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
