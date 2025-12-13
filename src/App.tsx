import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppShell } from './components/layout/AppShell';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Dispatches } from './pages/Dispatches';
import { DispatchDetail } from './pages/DispatchDetail';
import { MythBusters } from './pages/MythBusters';
import { RealStory } from './pages/RealStory';
import { WildDecisions } from './pages/WildDecisions';
import { WildDecisionDetail } from './pages/WildDecisionDetail';
import { Settings } from './pages/Settings';
import { MeetMarshMellow } from './pages/MeetMarshMellow';
import { ConservationStatus } from './pages/ConservationStatus';
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
            <Route path="/real-story/:id" element={<RealStory />} />
            <Route path="/wild-decisions" element={<WildDecisions />} />
            <Route path="/wild-decisions/:slug" element={<WildDecisionDetail />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/meet-marshmellow" element={<MeetMarshMellow />} />
            <Route path="/conservation-status" element={<ConservationStatus />} />
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
