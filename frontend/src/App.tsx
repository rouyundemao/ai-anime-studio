import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import TutorialDetail from './pages/TutorialDetail'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import Tools from './pages/Tools'
import Settings from './pages/Settings'
import Workflow from './pages/Workflow/Workflow'
import Module1 from './pages/Module1/Module1'
import Module2 from './pages/Module2/Module2'
import Module3 from './pages/Module3/Module3'
import Module4 from './pages/Module4/Module4'
import Module5 from './pages/Module5/Module5'
import Module6 from './pages/Module6/Module6'
import Module7 from './pages/Module7/Module7'
import Module8 from './pages/Module8/Module8'

function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="workflow" element={<Workflow />} />
          <Route path="tutorials/:id" element={<TutorialDetail />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:categoryId" element={<ResourceDetail />} />
          <Route path="tools" element={<Tools />} />
          <Route path="settings" element={<Settings />} />
          <Route path="module-1" element={<Module1 />} />
          <Route path="module-2" element={<Module2 />} />
          <Route path="module-3" element={<Module3 />} />
          <Route path="module-4" element={<Module4 />} />
          <Route path="module-5" element={<Module5 />} />
          <Route path="module-6" element={<Module6 />} />
          <Route path="module-7" element={<Module7 />} />
          <Route path="module-8" element={<Module8 />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App