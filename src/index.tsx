import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './scss/index.scss';
import App from './App';


const rootElement = document.getElementById('root');
//проверка на существование root - эллемента
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </BrowserRouter>,
// );
