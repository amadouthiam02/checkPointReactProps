import React from 'react';
import { PropTypes } from 'prop-types';
export const Profile=({nom, children,profession, age, onProfileClick})=>{
        
    
    return(

        <div style={{color:"blue"}}>
            <img src={children} alt="Ma Photo" width='50'/>
            <p style={{backgroundColor:"yellow"}}>{nom}</p> <hr />
            <p>{profession}</p> <hr />
            <h3>{age}</h3> <hr />
            <button onClick={()=>onProfileClick(nom)}>Alert Profile</button>
            

        </div>
    )



}

Profile.propTypes={
    nom:PropTypes.string,
    children:PropTypes.string,
    profession:PropTypes.string,
    age:PropTypes.number,
    onProfileClick:PropTypes.func



}

Profile.defaultProps={
    nom:"Amadou",
    children:"\images\maphoto.jpg",
    profession:"ingénieur",
    age:52
    
}