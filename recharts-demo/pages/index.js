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
      <h1>NextJS & ReCharts Rundown</h1>
      <Button sx={{variant: 'button'}}>
        <Link href="/chart_one">
          <a>Chart 1</a>
        </Link>

      </Button>
    </div>
  )
}
