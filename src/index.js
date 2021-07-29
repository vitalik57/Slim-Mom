import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/fonts/fonts.css';
import Modal from './components/DiaryAddProductForm/AddProductModal';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <App /> */}
        <Modal/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);