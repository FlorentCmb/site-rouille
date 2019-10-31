import React from 'react'

import blender from '../../assets/pictures/blender.jpg'
import candles from '../../assets/pictures/candles.jpg'
import chainsaw from '../../assets/pictures/megaChainsaw.jpg'
import mug from '../../assets/pictures/mug.jpg'
import papaya from '../../assets/pictures/papaya.jpg'
import petrol from '../../assets/pictures/petrol.png'
import sandworms from '../../assets/pictures/sandworm.jpg'
import skullEyes from '../../assets/pictures/skullEyes.png'
import spoons from '../../assets/pictures/spoons.jpg'
import tank from '../../assets/pictures/tankWW1.jpg'


import './Ritual.css'

export default class Ritual extends React.Component {
    render(){
        return(
            <div className="ritual-container">
                <h2>Tutorial for the ritual to contact us:</h2>
                <p>It's the best way to contact us! Really! but you can <strong>give us GOLD and BLOOD</strong> too. It maybe be faster. And you will be considered a better master of dark arts by our team. Your are the worst but you'll feel better. Maybe.</p>
                <h2>Step 1:</h2>
                <p>Buy these ingredients:</p>
                <ul class="gridIngredient">
                    <li>A papaya</li>
                    <li>Red candles</li>
                    <li>A Tank from WW1</li>
                    <li>2 table spoons</li>
                    <li>A mug</li>
                    <li>A chainsaw</li>
                    <li>A few sandworms</li>
                    <li>Petrol</li>
                </ul>
                <div class="gridIngredient">
                    <img src={papaya} className="ingredient" alt="papaya" />
                    <img src={candles} className="ingredient" alt="candles" />
                    <img src={tank} className="ingredient" alt="tank" />
                    <img src={spoons} className="ingredient" alt="spoons" />
                    <img src={mug} className="ingredient" alt="mug" />
                    <img src={chainsaw} className="ingredient" alt="chainsaw" />
                    <img src={sandworms} className="ingredient" alt="sandworms" />
                    <img src={petrol} className="ingredient" alt="petrol" />
                </div>
                <h2>Step 2:</h2>
                <p>It's an easy ritual so we don't think we need a step 3.</p>
                <p>You just have to mix the papaya and the tank. </p>
                <div class="stepImages">
                    <img src={papaya} className="stepImage" alt="papaya" />
                    <img src={blender} className="stepImage" alt="blender" />           <img src={tank} className="stepImage" alt="tank" />
                </div>
                <h2>Step 3:</h2>
                <p>Because we are professionals and we think you need a brain we'll make more steps, for YOU !</p>
                <p>Now you have a nice homogeneous juice, you have to put it in the mug.</p>
                <img src={mug} className="stepImage" alt="mug" />
                <h2>Step 4:</h2>
                <p>Now comes the easy part. Take the sandworms, <strong>ALIVE</strong>, it is <strong>VERY IMPORTANT</strong>, and cut them <strong>cleanly and softly</strong> with your chainsaw.</p>
                <div class="stepImages">
                    <img src={sandworms} className="stepImage" alt="sandworms" />
                    <img src={chainsaw} className="stepImage" alt="chainsaw" />
                </div>
                <h2>Step 5:</h2>
                <p>Use the petrol on the sandworm slices and burn them with the candles</p>
                <div class="stepImages">
                    <img src={sandworms} className="stepImage" alt="sandworms" />
                    <img src={petrol} className="stepImage" alt="petrol" />
                    <img src={candles} className="stepImage" alt="candles" />
                </div>
                <h2>Step 6:</h2>
                <p>Delicatly take the caramelized blood from the remains of the sandworm, add it to the mug and stir it for 3 hours</p>
                <div class="stepImages">
                    <img src={sandworms} className="stepImage" alt="sandworms" />
                    <img src={spoons} className="stepImage" alt="spoons" />
                    <img src={mug} className="stepImage" alt="mug" />
                </div>
                <h2>Step 7:</h2>
                <p>Now you drink it and you finally die to meat us in the underworld</p>
                <div class="stepImagesEnd">
                    <img src={mug} className="stepImageEnd" alt="mug" />
                    <img src={skullEyes} className="stepImageEnd" alt="mug" />
                </div>
            </div>
        )
    }
}