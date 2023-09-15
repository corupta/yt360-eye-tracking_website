import Component from 'inferno-component';
import { Route, Router } from 'inferno-router';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';

import { rootReducer } from './Store/Reducers';
import { fetchData } from './Store/Actions';

import browserHistory from './History';
import Main from './Main';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import ContactMe from './ContactMe/ContactMe';
import WrongPage from './WrongPage';
import FetchData from './FakeDB/FetchData';
import ItemDetails from './ItemDetails/ItemDetails';
import Download from './Download/Download';
import HeatmapGallery from './HeatmapGallery/HeatmapGallery';
import { HeatmapGalleryDescription } from './HeatmapGallery/HeatmapGalleryDescription';
import Acknowledgements from './Acknowledgements/Acknowledgements';
import Attributions from './Attributions/Attributions';

const store = createStore(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
    FetchData().then((data) => { store.dispatch(fetchData(data)); console.log('peep'); });
  }
  render() {
    return (
      <Provider store={ store }>
        <Main footer={<HeatmapGallery/>}>
          <Home />
          <Download />
          <Acknowledgements />
          <Attributions />
          <HeatmapGalleryDescription />
        </Main>
        {/* <Router history={ browserHistory }>
          <Route component={ Main } >
            <Route path='/' component={ Home } />
            <Route path='/galleries' component={ Gallery } />
            <Route path='/galleries/:gallery/:customCode' component={ MainItemListParam } />
            <Route path='/galleries/:gallery' component={ MainItemListRedirector } />
            <Route path='/details/:itemId' component={ ItemDetails } />
            <Route path='/' component={ Download } />
            <Route path='/contactme' component={ ContactMe } />
            <Route component={ WrongPage }>
              <div />
            </Route>
          </Route>
        </Router> */}
      </Provider>
    );
  }
}
