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

export default AppRouter
