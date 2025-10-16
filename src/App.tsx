import { DashBoardPage } from "./pages/dashboard"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import { RootRoute } from "./utility/rootroute"

const App = () => {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootRoute/>}>
        <Route index element={<Signin/>}/>
        <Route path="Signin" element={<Signin/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="DashBoard" element={<DashBoardPage/>}/> 
      </Route>
    )
  )

  return <>
    <RouterProvider router={route}/>
  </>
}

export default App