import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/authentication/SignIn';
import SignUp from './pages/authentication/SignUp';
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
import Setting from './pages/settings/setting';
import ContactUs from './pages/contact-us/contact';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useUtils } from './context/utilsContext';

function App() {
  const { OpenBackdrop, SnackbarInfo, closeSnackbar } = useUtils()
  return (
    <>
    <Router>
      <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/" element={<Splash/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/:username" element={<Profile />} />

          <Route path="/expandedcard" element={<ExpandedCard/>}/>
          <Route path="/addlisting" element={<AddListing/>}/>
        
          <Route path="/closest-place" element={<ClosestPlaceLists />} />
          <Route path="/closest-place/:placeId" element={<DetailedClosestPlace />} />
      
          <Route path="/recommended-place" element={<RecommendedPlaceLists />} />
          <Route path="/recommended-place/:placeId" element={<DetailedRecommendedPlace />} />

          <Route path="/newly-listed-place" element={<NewlyListedPlaceLists />} />
          <Route path="/newly-listed-place/:placeId" element={<DetailedNewlyListedPlace />} />
    
          <Route path="/settings" element={<Setting />} />
          <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      </Router>

      {/* Backdrop components */}
      <Backdrop open={OpenBackdrop} style={{zIndex : 1, color: "#fff"}}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* snackbar components  */}
      <Snackbar open={SnackbarInfo.open} autoHideDuration={SnackbarInfo.duration} onClose={closeSnackbar}>
        <Alert severity={SnackbarInfo.type}>
          {SnackbarInfo.message}
        </Alert>
      </Snackbar>
      </>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default App;