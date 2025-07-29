import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoutes } from './src/routes/AppRoutes';
import './global.css';

function App() {

  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
}

export default App;
