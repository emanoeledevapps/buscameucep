import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoutes } from './src/routes/AppRoutes';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
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
