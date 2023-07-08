import React from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/animated-photo.json'
import { CenteredLottie, DownloadQuoteCardCon, DownloadQuoteCardConText } from './AnimationElements'

const AnimatedDownloadButton = () => {
return (
    <DownloadQuoteCardCon 
    // onClick={null}
    >
        <CenteredLottie
            loop
            animationData={lottieJson}
            play
        />
        <DownloadQuoteCardConText>
            Download your quote card
        </DownloadQuoteCardConText>
    </DownloadQuoteCardCon>
  )
}

export default AnimatedDownloadButton