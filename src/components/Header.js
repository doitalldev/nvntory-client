import React from 'react';
import logo from '../images/logo.png';
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
          <img src={logo} alt='NVNTORY Logo' />
        </div>
        <div className='login-signup-container'>
          <div className='login'>
            <a href='/login'>Log In</a>
          </div>
          <div className='signup'>
            <a href='/signup'>Sign Up</a>
          </div>
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
          <img src={logo} alt='NVNTORY Logo' />
        </div>
        <div className='add-item-container'>
          <div className='add-item'>
            <a href='/add-item'>AddItem</a>
          </div>
          <div className='logout'>
            <a href='/logout'>Logout</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { HomeHeader, DashboardHeader };
