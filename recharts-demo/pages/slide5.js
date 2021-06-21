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
            <h1>ReCharts Stats</h1>

            <div>
                <Button sx={{ variant: 'button' }}>
                    <a target='_blank' href="https://www.npmjs.com/package/recharts">
                        npm
                    </a >
                </Button>

                <Button sx={{ variant: 'button' }}>
                    <a target='_blank' href="https://github.com/recharts/recharts">
                        GitHub
                    </a >
                </Button>
            </div>
            <div sx={{ vartiant: 'slideText' }}>
                <Image src={npmStats}
                    width={500}
                    height={500}
                    layout='intrinsic'
                    objectFit='contain'
                    alt='npm stats' /><br />
                <Image src={githubStats}
                    layout='intrinsic'
                    width={500}
                    height={100}
                    objectFit='contain'
                    alt='npm stats' /><br />
                {/* <Image src={githubStats} alt='github stats'/><br/> */}

            </div>

            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide4">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide6">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
