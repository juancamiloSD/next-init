import Head from 'next/head'
import styles from '../layouts/MainLayout.module.css'
import { FC } from 'react'

type Props = {
    children?: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Home Next App</title>
                <meta name="description" content="Home by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                
                { children }
              
            </main>
        </>
      )
}
