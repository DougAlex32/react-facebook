import GamesWeLove from "./main/01-games-we-love";
import TopPicksForYou from "./main/02-top-picks-for-you";
import HappeningNow from "./main/03-happening-now";
import MostPlayedGames from "./main/04-most-played-games";
import FeaturedGames from "./main/05-featured-games";
import AllGames from "./main/06-all-games";
import styles from '../../styles/Home.module.css';

export default function Gaming() {
    return (
        <div className={styles.container}>
            <GamesWeLove />
            <TopPicksForYou />
            <HappeningNow />
            <MostPlayedGames />
            <FeaturedGames />
            <AllGames />
        </div>
    )
}