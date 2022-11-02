import React from 'react';
import './css/style.css'

const styles ={
  header: {
    background: 'lightblue'
  },
}

function Header() {

  return (
    <header className="header" style={styles.header}>
      <h1 className='headerName'>Hamza Ramzanali</h1>
    </header>
  );
}

export default Header;