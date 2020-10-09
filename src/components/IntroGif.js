import React from 'react'; 
// import mainLogo from '../img/gif-intro.gif'

function IntroGif() {  
    return (
        
        <section>
            <img className="gif-intro"
                src={require('../img/gif-intro.gif')} alt="Pillow Tree Gif" 
            />
        </section>
    );
}

export default IntroGif;