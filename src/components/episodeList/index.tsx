import styles from "./styles.module.scss";
import { EpisodeType } from "../../services/courseService";

interface props {
    episode: EpisodeType;
}

const EpisodeList = function ({ episode }: props) {
    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        function toString(num: number) {
            return num.toString().padStart(2, "0");
        }

        const result = `${toString(minutes)}:${toString(seconds)}`;

        return result;
    };

    return <>
        <div className={styles.episodeCard}>
            <div className={styles.episodeOrderTime}>
                <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
            </div>
            <div className={styles.episodeTitleDescription}>
                <p className={styles.episodeTitle}>{episode.name}</p>
                <p className={styles.episodeDescription}>
                    {episode.synopsis}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam odio eaque perferendis molestiae, aperiam quod aliquid reprehenderit eum, blanditiis placeat! Nulla doloribus quam quia quasi at excepturi dolorum reprehenderit accusamus! Id dolores explicabo, nemo ipsa nisi quidem atque officia vitae pariatur ut consectetur laborum tempora molestias dignissimos, saepe rem!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet repellendus molestiae natus veritatis accusantium eligendi maxime quia laborum aliquid repudiandae consequuntur qui nostrum, iste recusandae nobis asperiores provident pariatur.
                </p>
            </div>
        </div>
    </>;
};

export default EpisodeList;