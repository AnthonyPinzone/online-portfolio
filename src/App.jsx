import { useEffect, useState } from 'react';
import {
  ScrollRestoration,
  Outlet,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {
  ThemeContext,
  PrefersReducedMotionContext,
} from './common/contexts';
import './App.scss';
import { PageLayout } from './layout';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Project from './pages/Project/Project';
import ProjectNotFound from './pages/Project/ProjectNotFound';
import useProjects from './hooks/useProjects';

function App() {
  const [theme, setTheme] = useState('light');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );
  }, []);

  const AppLayout = () => (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PrefersReducedMotionContext.Provider value={prefersReducedMotion}>
        <PageLayout>
          <Outlet />
          <ScrollRestoration />
        </PageLayout>
      </PrefersReducedMotionContext.Provider>
    </ThemeContext.Provider>
  );

  const router = createBrowserRouter([{
    element: <AppLayout />,
    errorElement: <Error />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'projects/:projectSlug',
        element: <Project />,
        errorElement: <ProjectNotFound />
      }
    ]
  }]);

  return <RouterProvider router={router} />;
}

export default App;
