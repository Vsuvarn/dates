import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Navigation from './Navigation'
import authReducer from './Redux/Reducer/authReducer';

const store = configureStore({
  reducer: {
    //multiple reducer
    authReducer
  },
});
function App() {
  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
  );
}

export default App;
