import styles from './video.module.css'

const Videos=(props)=>{

    let {videoData}=props;
    return <div className={styles.mainContainer}>
        <h1 className={styles.title}>Title :-  {videoData.title}</h1> 
        <div className={styles.container}>
            <div className={styles.channelDisplay}>
                <img src={videoData.channelLogoUrl} className={styles.channelImg}></img>
                <h1 className={styles.head}>{videoData.channelName}</h1>
            </div>
        <span><img src={videoData.thumbnailUrl} className={styles.imgSize}></img></span>
        <p className={styles.spaces}>Likes : {videoData.likes/1000}k</p>
        <p className={styles.colorView}>Views : {videoData.views/1000}k</p>
        </div>
    </div>
}
export default Videos;