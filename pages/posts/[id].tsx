// 型を利用するためにインポートする
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <main>
            <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
            <p>{id}</p>
        </main>
        </div>
    )
}

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルはpages/posts/[id].tsxなので、パスパラメータとしてidの値を返す必要がある
export const getStaticPaths: GetStaticPaths = async() => {
    const paths = [
        {
            params: { id: '1'},
        },
        {
            params: { id: '2' },
        },
        {
            params: { id: '3' },
        },
    ]
    return { paths, fallback: false }
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    // console.log(`getStaticProps実行 id = ${context.params!['id']}`)
    return {
        props: {
            id: context.params!['id'],
        },
    }
}

export default Post