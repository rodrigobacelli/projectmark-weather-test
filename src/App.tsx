import { Weather } from './pages/Weather';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <Layout>
      <h1>Weather App</h1>
      <Weather />
    </Layout>
  );
};
