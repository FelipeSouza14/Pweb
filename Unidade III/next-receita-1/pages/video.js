import styles from "./styles/video.module.css";

export function YouTubeBackground () {
  return (
    <div className={styles.video}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/Rz2SNm8VguE?autoplay=1&loop=1&controls=0&showinfo=0&mute=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
};