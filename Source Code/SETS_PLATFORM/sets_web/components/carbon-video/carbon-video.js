import { useState } from 'react'
import { ImPlay2 } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './carbon-video.module.css'

export default function CarbonTradingVideo() {
    const [videoState, setVideoState] = useState(0);

    const VideoOverLay = () => {
        if (videoState === 0) {
            return null;
        }
        else {
            return (
                <div className={styles.videoOverlay}>
                    <div className="w-full text-right p-2">
                        <AiOutlineClose size={30} className={styles.closeVideo} onClick={()=>{setVideoState(0)}} />
                    </div>
                    <iframe width="784" height="441" src="https://www.youtube.com/embed/FQSaoPPe2F0&modestbranding=1"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowfullscreen className = {styles.setsVideo}></iframe>
                </div>
            )
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.layer}>
                <div className="pt-5 pb-5 text-center">
                    <h4>See our values</h4>
                    <h1 className="pt-3 pb-5">Learn more about us</h1>
                    <div className={styles.playButtonOuter} onClick={() => { setVideoState(1) }}>
                        <ImPlay2 size={70} className={styles.playButton} />
                    </div>
                </div>
            </div>
            <VideoOverLay />
        </div>
    )
}