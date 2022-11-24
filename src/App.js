import { ColorModeContext, useMode } from './theme';
import { CssBaseLine, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
function App() {
   const [theme, colorMode] = useMode();
   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseLine />
            <div className='app'>
               <main className='content'>
                  <TopBar />
               </main>
            </div>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
