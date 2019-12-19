import React from 'react'
import ReactDom from 'react-dom'
import fullName  from './javascript.js'

export const App = () => {
    return (
        <div>
            <h1>My react application</h1>
            <p>My full name is {fullName}</p>
        </div>
    )
}
console.log('hello boy')
ReactDom.render(<App />, document.querySelector('.app'))