import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const router = useRouter()
    const { message } = props

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>ISR</title>
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <main>
                <p>このページはインクリメンタル静的サイト再生成によって、10秒ごとに再生成されます</p>
                <p>{message}</p>
            </main>
        </>
    )
}   

export const getStaticProps: GetStaticProps<ISRProps> = () => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}に実行されました`
    console.log("10秒ごと")

    return {
        props: {
            message
        },
        revalidate: 10
    }
}

export default ISR