import React from 'react';
import styles from './FirstVersion.module.css';
import marijuana from '../assets/marijuana.jpg';
import { Link } from 'react-router-dom';
const MediaBak = () => {
    React.useEffect(() => {
        document.title = 's.c.h.c.t | marijuana π€ͺ'
    }, []);

    return (
        <>
            <div className={`${styles.MediaContainer}`}>
                <div className={`${styles.MediaContent}`}>
                    <p> αα½αΎα±αα»αα¬αΈαα»ααΊαααΊα π€ͺ </p>
                </div>
                <div className={`${styles.MediaContent} ${styles.childImage}`}>
                    <img
                        className={`${styles.imageControls}`}
                        src={marijuana}
                        alt="marijuana"
                        draggable={false}
                    />
                </div>
                <div className={`${styles.MediaContent} ${styles.childText}`}>
                    <p>
                        When you smoke the herb, it reveals you to yourslef.
                    </p>
                    <div>
                        <h4>
                            Inhale. Hole it.
                        </h4>
                        <h4>
                            Exhale.Smile.
                        </h4>
                    </div>
                </div>
                <div className={`${styles.MediaContent}`}>
                    <Link to="/">Home π </Link>
                </div>
                <div className={`${styles.MediaContent}`}>
                    <Link to="/about">About This π€·</Link>
                </div>
                
            </div>
        </>
    )
}

const App = () => (
    <MediaBak />
)

export default App
