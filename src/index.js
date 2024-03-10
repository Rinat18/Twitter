import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContextProvider';
import PostContextProvider from './context/PostContextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	 <AuthContextProvider>
	 <PostContextProvider>
		<App />
		</PostContextProvider>
    </AuthContextProvider>
	</BrowserRouter>,
);
