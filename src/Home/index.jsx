import React from 'react';
import styles from './Home.module.css';
import marijuana from "../assets/marijuana.jpg";
import { Link } from 'react-router-dom';
const Media = () => {
    React.useEffect(() => {
        document.title = 's.c.h.c.t | marijuana'
    },[]);
    return (
        <>
            <div className={`${styles.MediaContainer}`}>
                <div className={`${styles.MediaContent}`}>
                    <p> ရွှေချထားချင်တယ်။ </p>
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
                    <Link to="/about">About This</Link>
                </div>
            </div>
        </>
    )   
}

const App = () => (
    <Media />
)

export default App
