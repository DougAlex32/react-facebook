import styles from '../../../styles/Gaming.module.css';
import Image from 'next/image';
import formatPlayerCount from '../../../utils/format-player-count';

const gameList = [
    { "id": 1, "name": "Yatzy FRVR", "players": 1000000, "url": "/yatzy-frvr", "type": "Board", "imageUrl": "/images/gaming/games-we-love/yatzy.jpg", "linkUrl": "https://www.facebook.com/gaming/play/203971994810496/?gd_impression_id=7128736295543870&source=popular_games&with_pv=true" },
    { "id": 2, "name": "Drop 2048: Mission", "players": 101000, "url": "/drop-2048-mission", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/drop-2048.jpg", "linkUrl": "https://www.facebook.com/gaming/play/5852573234793519/?gd_impression_id=4157855877293121&source=popular_games&with_pv=true" },
    { "id": 3, "name": "Cooking Center", "players": 170000, "url": "/cooking-center", "type": "Simulation", "imageUrl": "/images/gaming/games-we-love/cooking-center.jpg", "linkUrl": "https://www.facebook.com/gaming/play/266793425871193/?gd_impression_id=7561943876887619&source=popular_games&with_pv=true" },
    { "id": 4, "name": "Farmland", "players": 125000, "url": "/farmland", "type": "Builder", "imageUrl": "/images/gaming/games-we-love/farmland.jpg", "linkUrl": "https://www.facebook.com/gaming/play/616448052949892/?gd_impression_id=8274427411686468&source=popular_games&with_pv=true" },
    { "id": 5, "name": "The Puzzle", "players": 3000000, "url": "/the-puzzle", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/the-puzzle.jpg", "linkUrl": "https://www.facebook.com/gaming/play/253130686313001/?gd_impression_id=6398660574700618&source=popular_games&with_pv=true" },
    { "id": 6, "name": "City Tycoon", "players": 80000, "url": "/city-tycoon", "type": "Simulation", "imageUrl": "/images/gaming/games-we-love/city-tycoon.jpg", "linkUrl": "https://www.facebook.com/gaming/play/1234567890123456/?gd_impression_id=0123456789012345&source=popular_games&with_pv=true" },
    { "id": 7, "name": "Space Invaders", "players": 500000, "url": "/space-invaders", "type": "Arcade", "imageUrl": "/images/gaming/games-we-love/space-invaders.jpg", "linkUrl": "https://www.facebook.com/gaming/play/7890123456789012/?gd_impression_id=9012345678901234&source=popular_games&with_pv=true" },
    { "id": 8, "name": "Quiz Master", "players": 200000, "url": "/quiz-master", "type": "Trivia", "imageUrl": "/images/gaming/games-we-love/quiz-master.jpg", "linkUrl": "https://www.facebook.com/gaming/play/3456789012345678/?gd_impression_id=2345678901234567&source=popular_games&with_pv=true" },
    { "id": 9, "name": "Maze Runner", "players": 150000, "url": "/maze-runner", "type": "Adventure", "imageUrl": "/images/gaming/games-we-love/maze-runner.jpg", "linkUrl": "https://www.facebook.com/gaming/play/4567890123456789/?gd_impression_id=6789012345678901&source=popular_games&with_pv=true" },
    { "id": 10, "name": "Bubble Pop", "players": 300000, "url": "/bubble-pop", "type": "Casual", "imageUrl": "/images/gaming/games-we-love/bubble-pop.jpg", "linkUrl": "https://www.facebook.com/gaming/play/5678901234567890/?gd_impression_id=7890123456789012&source=popular_games&with_pv=true" },
    { "id": 11, "name": "Jungle Adventure", "players": 120000, "url": "/jungle-adventure", "type": "Adventure", "imageUrl": "/images/gaming/games-we-love/jungle-adventure.jpg", "linkUrl": "https://www.facebook.com/gaming/play/0987654321098765/?gd_impression_id=3456789012345678&source=popular_games&with_pv=true" },
    { "id": 12, "name": "Match-3 Mania", "players": 50000, "url": "/match-3-mania", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/match-3-mania.jpg", "linkUrl": "https://www.facebook.com/gaming/play/6543210987654321/?gd_impression_id=2345678901234567&source=popular_games&with_pv=true" },
    { "id": 13, "name": "Virtual Pet World", "players": 250000, "url": "/virtual-pet-world", "type": "Simulation", "imageUrl": "/images/gaming/games-we-love/virtual-pet-world.jpg", "linkUrl": "https://www.facebook.com/gaming/play/1098765432109876/?gd_impression_id=4567890123456789&source=popular_games&with_pv=true" },
    { "id": 14, "name": "Racing Fever", "players": 180000, "url": "/racing-fever", "type": "Racing", "imageUrl": "/images/gaming/games-we-love/racing-fever.jpg", "linkUrl": "https://www.facebook.com/gaming/play/5678901234567890/?gd_impression_id=7890123456789012&source=popular_games&with_pv=true" },
    { "id": 15, "name": "Pixel Wars", "players": 400000, "url": "/pixel-wars", "type": "Action", "imageUrl": "/images/gaming/games-we-love/pixel-wars.jpg", "linkUrl": "https://www.facebook.com/gaming/play/1234567890123456/?gd_impression_id=2345678901234567&source=popular_games&with_pv=true" },
    { "id": 16, "name": "Candy Crush Saga", "players": 7000000, "url": "/candy-crush-saga", "type": "Puzzle", "imageUrl": "/images/gaming/games-we-love/candy-crush-saga.jpg", "linkUrl": "https://www.facebook.com/gaming/play/3456789012345678/?gd_impression_id=9012345678901234&source=popular_games&with_pv=true" },
    { "id": 17, "name": "Dungeon Explorer", "players": 90000, "url": "/dungeon-explorer", "type": "Adventure", "imageUrl": "/images/gaming/games-we-love/dungeon-explorer.jpg", "linkUrl": "https://www.facebook.com/gaming/play/6789012345678901/?gd_impression_id=2345678901234567&source=popular_games&with_pv=true" },
    { "id": 18, "name": "Fishing Frenzy", "players": 220000, "url": "/fishing-frenzy", "type": "Simulation", "imageUrl": "/images/gaming/games-we-love/fishing-frenzy.jpg", "linkUrl": "https://www.facebook.com/gaming/play/5678901234567890/?gd_impression_id=7890123456789012&source=popular_games&with_pv=true" },
    { "id": 19, "name": "Chess Master", "players": 60000, "url": "/chess-master", "type": "Board", "imageUrl": "/images/gaming/games-we-love/chess-master.jpg", "linkUrl": "https://www.facebook.com/gaming/play/0987654321098765/?gd_impression_id=3456789012345678&source=popular_games&with_pv=true" },
    { "id": 20, "name": "Epic Battles", "players": 350000, "url": "/epic-battles", "type": "Strategy", "imageUrl": "/images/gaming/games-we-love/epic-battles.jpg", "linkUrl": "https://www.facebook.com/gaming/play/6543210987654321/?gd_impression_id=2345678901234567&source=popular_games&with_pv=true" }
];
import { useState, useRef } from 'react';

export default function TopPicksForYou() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        setScrollPosition(scrollPosition - 1);
        scrollToPosition(scrollPosition - 1);
    };

    const scrollRight = () => {
        setScrollPosition(scrollPosition + 1);
        scrollToPosition(scrollPosition + 1);
    };

    const scrollToPosition = (position) => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollAmount = position * scrollContainer.clientWidth;
            scrollContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.gameContainer}>
            <h2 className={styles.gametitle}>Top picks for you</h2>
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
                <button className={styles.scrollButton} onClick={scrollLeft}>{"<"}</button>
                <div className={styles.gameGridContainer}>
                    <div className={styles.gameGrid}>
                        {gameList.map((game, idx) => (
                            <div className={styles.gameCard} key={idx}>
                            <div className={styles.gameCardBackground} style={{ backgroundImage: `url(${game.imageUrl})` }}></div>
                            <Image src={game.imageUrl} alt={game.name} width='180' height='180' className={styles.gameImage} style={{ verticalAlign: 'top' }} />
                        <div className={styles.gameCardBottom}>
                            <h2>{game.name}</h2>
                            <div className={styles.playerCount}>{formatPlayerCount(game.players)} players</div>
                        </div>
                    </div>
                        ))}
                    </div>
                </div>
                <button className={styles.scrollButton} onClick={scrollRight}>{">"}</button>
            </div>
        </div>
    );
}
