import { useEffect, useState } from 'react';
import {
  ThemeContext,
  DataContext,
  PrefersReducedMotionContext,
} from './common/contexts';
import { PageLayout as Layout } from './layout';
import { Intro, Projects, Experience } from './components';
import './App.scss';

function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState('light');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log('There was an issue fetching the data.', error);
    }
  };

  useEffect(() => {
    getData();

    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );
  }, []);

  return (
    <DataContext.Provider value={data}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <PrefersReducedMotionContext.Provider value={prefersReducedMotion}>
          <Layout>
            <Intro />
            <Projects />
            <Experience />
          </Layout>
        </PrefersReducedMotionContext.Provider>
      </ThemeContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
