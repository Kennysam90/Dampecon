import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import Home from './pages/Home'
import Topnav from './Component/Topnav'
import Footer from './Component/Footer'
import Cases from './pages/Cases/Cases'
import Contact from './pages/ContactUs/Contact'
import AboutUs from './pages/AboutUs/About-Us'
import Webapp from './pages/Services/Design/Web-app'
import Mobileapp from './pages/Services/Design/Mobile-app'
import Mobiledev from './pages/Services/Development/Mobile-dev'
import Webdev from './pages/Services/Development/Web-dev'
import Teams from './pages/AboutUs/Teams'
import Topnav2 from './Component/Topnav2'
import Chat from './Component/Chat';
import Comment from './Component/Comment';
import Project from './Component/project';
import Award from './Component/Award';
import Explain from './Component/How-it-works';
import Benefits from './Component/Benefits';
import Career from './Career';
import Faq from './Component/Faq';
import Admin from './pages/Admin';
import ProjectsTable from './Component/ProjectsTable';
import TeamsTable from './Component/TeamsTable';
import HomeProject from './Component/HomeProject';
import Backup from './Component/backup';
import TestimonialsManager from './Component/TestimonialsManager';
import TestimonialsList from './Component/TestimonialsList';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
     <QueryClientProvider client={queryClient}>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topnav' element={<Topnav />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/cases'  element={<Cases />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/electrical-procurement' element={<Webapp />} />
        <Route path='/electrical-installation' element={<Mobileapp />} />
        <Route path='/electrical-procurement-installation' element={<Mobiledev />} />
        <Route path='/electrical-engineering' element={<Webdev />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/topnav2' element={<Topnav2 />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/project' element={<Project />} />
        <Route path='/award' element={<Award />} />
        <Route path='/explain' element={<Explain />} />
        <Route path='/benefits' element={<Benefits />} />
        <Route path='/career' element={<Career />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/projectsTable' element={<ProjectsTable />} />
        <Route path='/teamsTable' element={<TeamsTable />} />
        <Route path='/homeproject' element={<HomeProject />} />
        <Route path='/backup' element={<Backup />} />
        <Route path='/testimonials' element={<TestimonialsManager />} />
        <Route path='/testimonials-list' element={<TestimonialsList />} />
      </Routes>
     </Router>
     </QueryClientProvider>
    </>
  )
}

export default App
