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
      <h1 sx={{ variant: 'headerText' }}>Recharts:</h1>
      <h2 style={{ fontSize: '30px', marginTop: 0, paddingTop: 0 }}>
        80% of the charts with 20% of the effort
      </h2>
      <h2>Walter Jenkins</h2>
      <Button sx={{ variant: 'button' }}>
        <Link href="/slide1">
          <a>Next</a>
        </Link>
      </Button>
    </div>
  )
}
