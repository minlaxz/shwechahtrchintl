import React from 'react';
import styles from './App.module.css';
import me from "./assets/marijuana.jpg";

const Media = () => {
  return (
    <>
      {/* <p style={{ position: "absolute", marginLeft:"50vw", color:"#555500", fontWeight:"bolder" }}> Flex Container</p> */}
      <div className={`${styles.MediaContainer}`}>

        <div className={`${styles.MediaContent} ${styles.childImage}`}>
          <img
            className={`${styles.imageControls}`}
            src={me}
            alt=""
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

      </div>
    </>
  )
}

const App = () => (
  <Media />
)

export default App
