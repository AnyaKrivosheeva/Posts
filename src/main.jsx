import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import App from './App.jsx'
import PostsPage from "./pages/posts/PostsPage.jsx";
import Root from "./components/Root/Root.jsx";
import DetailedPost from "./pages/posts/detail/DetailedPost.jsx";
import EditPost from "./pages/posts/edit/EditPost.jsx";
import AddPost from "./pages/posts/add/AddPost.jsx";
import AuthPage from "./pages/auth/AuthPage.jsx";
import RegistrationPage from "./pages/registration/RegistrationPage.jsx";
import './index.css';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Что-то пошло не так...</h2>,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'posts',
        element: <PostsPage />
      },
      {
        path: 'posts/:id',
        element: <DetailedPost />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPost />
      },
      {
        path: 'posts/add',
        element: <AddPost />
      },
      {
        path: 'auth',
        element: <AuthPage />
      },
      {
        path: 'registration',
        element: <RegistrationPage />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
