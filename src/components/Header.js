import React from 'react';
import logo from '../images/logo.png';
import './header.css';
// import { withRouter } from 'react-router';

// const headerLinks = () => {
//   // const matchedPath = matchPath(props.path, {
//   //   path: '/dashboard',
//   //   exact: true,
//   //   strict: false,
//   // });

//   // console.log(matchedPath, props.path);

//   if (this.props.location.pathname == '/dashboard') {
//     return (
//       <>
//         <div className='logo-div'>
//           <img src={logo} alt='NVNTORY Logo' />
//         </div>
//         <div className='add-item-container'>
//           <div className='add-item'>
//             <a href='/add-item'>AddItem</a>
//           </div>
//           <div className='logout'>
//             <a href='/logout'>Logout</a>
//           </div>
//         </div>
//       </>
//     );
//   } else {
//     return <> </>;
//   }
// };

const HomeHeader = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <a href='/'>
            <img src={logo} alt='NVNTORY Logo' />
          </a>
        </div>
        <div className='dashboard'>
          <a href='/dashboard'>Dashboard</a>
        </div>
      </nav>
    </header>
  );
};

const DashboardHeader = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <a href='/dashboard'>
            <img src={logo} alt='NVNTORY Logo' />
          </a>
        </div>
        <div className='add-item-container'>
          <div className='add-item'>
            <a href='/add-item'>
              <button className='button-add'>Add Item</button>
            </a>
          </div>
          <div className='home'>
            <a href='/'>
              <button>Home</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { DashboardHeader, HomeHeader };
