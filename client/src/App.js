import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail, DogCreate, Home, Landing } from './components/index';

/* 
import SearchBar from './components/SearchBar';
<Route exact path="/detail" render={() => <Detail />} />
<Route exact path="/create" render={() => <Forms />} />
{location.pathname !== '/' && <SearchBar />}
 
 */

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
