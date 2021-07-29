import React from 'react'
import styles from './App.module.css'

const Media = () => {
  return (
    <div className={`${styles.MediaContainer}`}>
      <div className={`${styles.MediaContent}`}>
      If you want to live a happy life, tie it to a goal, not to people or things.
      </div>
      <div className={`${styles.MediaContent}`}>
        Your time is limited, so don’t waste it living someone else’s life. 
        Don’t be trapped by dogma – which is living with the results of other people’s thinking.
      </div>
      <div className={`${styles.MediaContent}`}>
      Everybody wants to be famous, 
      but nobody wants to do the work. I live by that. 
      You grind hard so you can play hard. 
      At the end of the day, you put all the work in, and eventually it’ll pay off. 
      It could be in a year, it could be in 30 years. 
      Eventually, your hard work will pay off.
      </div>
    </div>
  )
}

const App = () => {

  return (
    // <ul className={`${styles.ul}`}>
    //   <li className={`${styles.o1}`}>One</li>
    //   <li>Two</li>
    //   <li>Threeeeeeeeee</li>
    //   <li>Four</li>
    //   <li>Five</li>
    // </ul>
    <Media />
  )
}

export default App
