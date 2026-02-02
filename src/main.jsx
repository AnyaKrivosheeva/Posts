import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import Posts from "./pages/posts/Posts.jsx";
import Root from "./components/Root/Root.jsx";
import DetailedPost from "./pages/posts/detail/DetailedPost.jsx";
import EditPost from "./pages/posts/edit/EditPost.jsx";
import AddPost from "./pages/posts/add/AddPost.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Registration from "./pages/registration/Registration.jsx";

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
        element: <Posts />
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
        element: <Auth />
      },
      {
        path: 'registration',
        element: <Registration />
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
