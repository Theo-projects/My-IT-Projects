import React from 'react'

class Header extends React.Component {
    render() {
        return (
           <header style={headerStyle}>
               <h1>ToDoList</h1>
           </header>
        )
    }
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header
