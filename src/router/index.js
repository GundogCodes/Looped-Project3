import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ Component, key, path }) => (
          <Route
            key={key}
            path={path}
            element={<Component page={key} />}
          />
        ))}
      </Routes>
      
    </Router>
  )
}

//<Route path={"/main"} key={"Main"} element={<Component page={"Main"}/> }></Route>

export default AppRouter
