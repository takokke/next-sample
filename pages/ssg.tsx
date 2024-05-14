import { GetStaticProps, NextPage, NextPageContext} from "next";
import Head from 'next/head'

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
                <p>{message}</p>
            </main>            
        </div>

    )
}

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetStaticPropsが実行される`
    
    return {
        // ここで返したpropsを元にページコンポーネントを描画する
        props: {
            message,
        },
    }
}

export default SSG