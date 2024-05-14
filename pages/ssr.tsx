import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <main>
                <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです</p>
                <p>{message}</p>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}に実行されました`
    console.log(message)

    return {props: {message}}
}

export default SSR