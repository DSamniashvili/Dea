import React from 'react';
import SocialItem from './SocialItem';
let SocialsArr = ['facebook-square', 'twitter-square', 'instagram', 'vimeo-square'];
let newSocialsArr = [];
let colors = ['blue', 'light-blue', 'pink', 'darkred'];
let divColor;

const GenerateSocials = () => {
    for(let i=0; i < SocialsArr.length; i++) {
        divColor = colors[i]
        
        newSocialsArr.push(
            <SocialItem 
            key={[i]}
            className= {SocialsArr[i]}
            style= {divColor}
            />
        )
        console.log(divColor);
    } 
    return (
        <div className="socialsWrapper">
            {newSocialsArr}
        </div>
    )
}
console.log(newSocialsArr);

export default GenerateSocials