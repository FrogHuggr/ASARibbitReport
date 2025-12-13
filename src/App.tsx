import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppShell } from './components/layout/AppShell';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Dispatches } from './pages/Dispatches';
import { DispatchDetail } from './pages/DispatchDetail';
import { MythBusters } from './pages/MythBusters';
import { MythBusterDetail } from './pages/MythBusterDetail';
import { RealStory } from './pages/RealStory';
import { Settings } from './pages/Settings';
import { NewThisMonth } from './pages/NewThisMonth';
import { MarshMellowPicks } from './pages/MarshMellowPicks';
import { MostPopular } from './pages/MostPopular';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/dispatches" element={<Dispatches />} />
            <Route path="/dispatches/:id" element={<DispatchDetail />} />
            <Route path="/myths" element={<MythBusters />} />
            <Route path="/myths/:id" element={<MythBusterDetail />} />
            <Route path="/real-story/:id" element={<RealStory />} />
            <Route path="/settings" element={<Settings />} />
            {/* Collection pages */}
            <Route path="/new" element={<NewThisMonth />} />
            <Route path="/picks" element={<MarshMellowPicks />} />
            <Route path="/popular" element={<MostPopular />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
