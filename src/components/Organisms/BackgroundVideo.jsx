import React from 'react';

import classes from '../../styles/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://firebasestorage.googleapis.com/v0/b/covidperu-46cde.appspot.com/o/Web%20Design%20Agency%20video%20background.mp4?alt=media&token=14984743-442d-4c00-8310-f095d58218e2"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Descubre, aprende y comparte.</h1>
                   <p> juntos, alcanzamos más de lo que cualquier persona podría hacer sola. 🚀</p>
                   <p>¿Quieres ir sólo, o multiplicar tus probabilidades de éxito?</p>
                   
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo