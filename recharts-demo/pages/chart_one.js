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
      <h1>Chart #1</h1>
      
      <div>
        <Button sx={{variant: 'button'}}>
            <Link href="/">
            <a>Back</a>
            </Link>

        </Button>
        <Button sx={{variant: 'button'}}>
            <Link href="/chart_two">
            <a>Next</a>
            </Link>

        </Button>
      </div>
    </div>
  )
}
