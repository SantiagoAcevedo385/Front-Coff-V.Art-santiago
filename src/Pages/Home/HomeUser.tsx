import { Slider } from "../../components/Slider/Slider"

import BannerHome1 from '../../assets/Banner1.png'
import BannerHome2 from '../../assets/Banner2.png'
import BannerHome3 from '../../assets/Banner3.png'

export const HomeUser = () => {

    const Images = [
        BannerHome1,
        BannerHome2,
        BannerHome3
    ]

    return(
        <>
            <Slider images={Images} autoPlay={true} autoPlayInterval={2000} showArrows={true} showDots={true}/>
        </>
    )
}