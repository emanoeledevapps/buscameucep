import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BootSplash from "react-native-bootsplash";
import { AppRoutes } from './src/routes/AppRoutes';
import './global.css';

function App() {
  useEffect(() => {
    BootSplash.hide({ fade: true })
  }, []);

  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
