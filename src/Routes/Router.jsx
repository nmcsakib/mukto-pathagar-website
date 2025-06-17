import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import Categories from "../BookCategory/Categories";
import AllBooks from "../AllBooks/AllBooks";
import Members from "../Members/Members";
import Events from "../Events/Events";
import About from "../About/About";
import LoginForm from "../components/LoginForm/LoginForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/events/:year',
        element: <Events />
      },
      {
        path: '/members/:members',
        element: <Members />,
        
      },
      {
        path: '/Books/:books',
        element: <AllBooks />
      },
      {
        path: '/Books/:categories/:category',
        element: <Categories />
      },
      {
        path: '/admin/login',
        element: <LoginForm />
      },
     
    ]

  }
])

export default router