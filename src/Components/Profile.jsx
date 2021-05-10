import React from 'react'
import About from './About'
import profilepic from './Styles/smiles.jpg'
import Counter from './Counter'


export default function Profile (){
    return (
        <div className="profile">
           
            <p>profile</p>
            <img src ={profilepic}></img>

            <About />
            <Counter />
            
        </div>
    )
}

