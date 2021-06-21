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
            <h1>Working with Child components</h1>
            <p>
                <ul>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#dataKey' target="_blank" >dataKey</a>: Key on the object that that will fill the value of the component</li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#stroke' target="_blank" >stroke</a>: Color of the stroke</li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#strokeWidth' target="_blank" >strokeWidth</a>: Width of the stroke</li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#activeDot' target="_blank" >activeDot</a>: Controls styling of dot and component on hover</li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#fill' target="_blank" >fill</a>: Fill color of component</li>
                    <li><a sx={{ variant: 'link' }} href='https://recharts.org/en-US/api/Line#label' target="_blank" >label</a>: Customization of label for that component (can be another component)</li>
                </ul>
            </p>
            <div>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide6">
                        <a>Back</a>
                    </Link>
                </Button>
                <Button sx={{ variant: 'button' }}>
                    <Link href="/slide8">
                        <a>Next</a>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
