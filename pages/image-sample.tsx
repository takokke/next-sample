import { NextPage } from "next"
import Image from "next/image"
// 画像を静的インポートする
import BeachImage from "@/public/images/beach01.png"

const ImageSample: NextPage = (props) => {
    return (
        <div>
            <p>imgタグ</p>
            <img src="/images/beach01.png" alt="imgタグで"/>
            <p>Imageコンポーネント</p>
            <Image src={BeachImage} placeholder="blur" alt="Imageコンポーネント"/>
            <p>Imageコンポーネントに下</p>
        </div>
    )
}
export default ImageSample