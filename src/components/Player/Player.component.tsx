import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";
import PlayButton from "../PlayButton/PlayButton.component";
import PauseButton from "../PauseButton/PauseButton.component";
import ProgressBar from "../ProgressBar/ProgressBar.component";

const Player = () => {
  const { state, actions } = usePlayer()
  return (
    <div className={styles.root}>
       <div className={styles.player}>
        {state.playing ? (
          <PauseButton pause={() => actions.pause()}/>
        ) : (
          <PlayButton play={() => actions.play({
            id: trackData.id,
            name: trackData.name,
            src: trackData.preview_url,
            artists: trackData.artists.map(artist => artist.name)
           })} />
        )}
         <ProgressBar progress={state.progress}/>
       </div>
    </div>
  );
};

export default Player;
