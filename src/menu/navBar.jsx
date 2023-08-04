import React from 'react'; 
import Logo from './logo'
import Menu from './menu'
import MyIkons from './components/ikons';

function NavBar() {
  return (
    <div className="navBar">
      <div>  <Logo /></div>
      <div>
       <Menu />
      </div>
      <div> 
        <MyIkons />
    </div>
    </div>
  );
}

export default NavBar;