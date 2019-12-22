import React from 'react'
import ReactDom from 'react-dom'
import fullName  from './javascript.js'
import './app.css'
import Image from './beautiful_sunset_mini.jpg'

export const App = () => {
    return (
        <div>
            <h1 className="title">My react application</h1>
            <p>My full name is {fullName}</p>
            <img src={Image} />
        </div>
    )
}
console.log('hello boy')
ReactDom.render(<App />, document.querySelector('.app'))