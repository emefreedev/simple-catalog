import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themeConfigMUI';

/** Locals */
import { AuthProvider } from './contexts/auth/AuthProvider';
import { RootRouter } from './routers/RootRouter';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
