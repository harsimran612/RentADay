import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import Profile from './pages/Profile';
import ExpandedCard from './pages/ExpandedCard';
import AddListing from './pages/AddListing';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ClosestPlaceLists from './pages/closest-place/ClosestPlaceLists';
import DetailedClosestPlace from './pages/closest-place/DetailedClosestPlace';
import RecommendedPlaceLists from './pages/recommended-place/RcmdPlaceLists';
import DetailedRecommendedPlace from './pages/recommended-place/DetailedRcmdPlace';
import NewlyListedPlaceLists from './pages/newly-listed-place/NewlyListedPlaceLists';
import DetailedNewlyListedPlace from './pages/newly-listed-place/DetailedNewlyListedPlace';

function App() {
  return (


    <div className="app">
      <Router>
        <Header />
        <Routes>
              <Route path="/" element={<Splash/>}/>
              <Route path="/SignIn" element={<SignIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="pages/Home" element={<Home/>}/>
              <Route path="pages/search" element={<SearchPage/>}/>
              <Route path="pages/aboutus" element={<AboutUs/>}/>
              <Route path="pages/profile" element={<Profile/>}/>
              <Route path="pages/profile/:username" element={<Profile/>}/>
              <Route path="pages/expandedcard" element={<ExpandedCard/>}/>
              <Route path="addlisting" element={<AddListing/>}/>
            
              <Route path="/closest-place" element={<ClosestPlaceLists />} />
              <Route path="/closest-place/:placeId" element={<DetailedClosestPlace />} />
          
              <Route path="/recommended-place" element={<RecommendedPlaceLists />} />
              <Route path="/recommended-place/:placeId" element={<DetailedRecommendedPlace />} />

              <Route path="/newly-listed-place" element={<NewlyListedPlaceLists />} />
              <Route path="/newly-listed-place/:placeId" element={<DetailedNewlyListedPlace />} />
        </Routes>
        <Footer />
        
        
      </Router>
    

    </div>
  );
}

export default App;
