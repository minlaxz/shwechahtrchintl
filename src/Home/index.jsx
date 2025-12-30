import React from 'react';
import styles from './Home.module.css';
import myGF from "../assets/my-gf.jpg";
import myGFsvg from "../assets/my-gf.svg";
import { Link } from 'react-router-dom';
const Media = () => {
    React.useEffect(() => {
        document.title = 's.c.h.c.t | marijuana 🤪'
    }, []);

    const [img, setImg] = React.useState(myGFsvg);

    return (
        <>
            <div className={`${styles.MediaContainer}`}>
                <div className={`${styles.MediaContent}`}>
                    <p> ရွှေချထားချင်တယ်။ 🤪 </p>
                </div>
                <div className={`${styles.MediaContent} ${styles.childImage}`}>
                    <small>click on image 🙃</small>
                    <img
                        className={`${styles.imageControls}`}
                        src={img}
                        alt="marijuana girlfriend"
                        draggable={false}
                        onClick={() => {
                            img === myGFsvg ? setImg(myGF) : setImg(myGFsvg);
                        }}
                    />
                </div>
                <div className={`${styles.MediaContent} ${styles.childText}`}>
                    <p>
                        When you smoke the herb, it reveals you to yourslef.
                    </p>
                    <div>
                        <h4>
                            Inhale. Hold it.
                        </h4>
                        <h4>
                            Exhale. And smile.
                        </h4>
                    </div>
                </div>
                <div className={`${styles.MediaContent}`}>
                    <Link to="/firstversion">First version of this page</Link>
                </div>
                <div className={`${styles.MediaContent}`}>
                    <Link to="/about">About This 🤷</Link>
                </div>
            </div>
        </>
    )
}

const App = () => (
    <Media />
)

export default App
