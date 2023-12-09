import styles from '../../../styles/Gaming.module.css';
import Image from 'next/image';
import formatPlayerCount from '../../../utils/format-player-count';

const gameList = [
    { "id": 1, "name": "Yatzy FRVR", "players": 1000000, "url": "/yatzy-frvr", "type": "Board", "imageUrl": "/images/gaming/games-we-love/yatzy.jpg", "linkUrl": "https://www.facebook.com/gaming/play/203971994810496/?gd_impression_id=7128736295543870&source=popular_games&with_pv=true" },
    { "id": 2, "name": "Drop 2048: Mission", "players": 101000, "url": "/drop-2048-mission", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/drop-2048.jpg", "linkUrl": "https://www.facebook.com/gaming/play/5852573234793519/?gd_impression_id=4157855877293121&source=popular_games&with_pv=true" },
    { "id": 3, "name": "Cooking Center", "players": 170000, "url": "/cooking-center", "type": "Simulation", "imageUrl": "/images/gaming/games-we-love/cooking-center.jpg", "linkUrl": "https://www.facebook.com/gaming/play/266793425871193/?gd_impression_id=7561943876887619&source=popular_games&with_pv=true" },
    { "id": 4, "name": "Farmland", "players": 125000, "url": "/farmland", "type": "Builder", "imageUrl": "/images/gaming/games-we-love/farmland.jpg", "linkUrl": "https://www.facebook.com/gaming/play/616448052949892/?gd_impression_id=8274427411686468&source=popular_games&with_pv=true" },
    { "id": 5, "name": "The Puzzle", "players": 3000000, "url": "/the-puzzle", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/the-puzzle.jpg", "linkUrl": "https://www.facebook.com/gaming/play/253130686313001/?gd_impression_id=6398660574700618&source=popular_games&with_pv=true" }
]

export default function HappeningNow() {
    return (
        <div className={`${styles.gameContainer} ${styles.singleRow} ${styles.gameRow}`}>
            <h2 className={styles.gametitle}>
                Happening now
            </h2>
            <div className={styles.gameGrid}>
                {gameList.map((game, idx) => {
                    return (
                        <div className={styles.gameCard} key={idx}>
                                <div className={styles.gameCardBackground} style={{ backgroundImage: `url(${game.imageUrl})` }}></div>
                                <Image src={game.imageUrl} alt={game.name} width='180' height='180' className={styles.gameImage} style={{ verticalAlign: 'top' }} />
                            <div className={styles.gameCardBottom}>
                                <h2>{game.name}</h2>
                                <div className={styles.playerCount}>{formatPlayerCount(game.players)} players</div>
                            </div>
                        </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }