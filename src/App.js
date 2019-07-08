import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Berita from './Berita';
import Nav from './material/Nav';
import Home from './Home';
import Galeri from './Galeri';
import Struktur from './Struktur';
import Visi from './Visi';
import Tugas from './Tugas';
import Ideo from './Ideo';
import Ketahanan from './Ketahanan';
import Politik from './Politik';
import Sekre from './Sekre';
import Regulasi from './Regulasi';
import Download from './Download';
import Ppid from './Ppid';


class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/Home' component={Home}/>
            <Route path='/berita' component={Berita}/>
            <Route path='/galeri' component={Galeri}/>
            <Route path='/struktur' component={Struktur}/>
            <Route path='/visi' component={Visi}/>
            <Route path='/tugas' component={Tugas}/>
            <Route path='/ideo' component={Ideo}/>
            <Route path='/ketahanan' component={Ketahanan}/>
            <Route path='/politik' component={Politik}/>
            <Route path='/sekre' component={Sekre}/>
            <Route path="/regulasi" component={Regulasi}/>
            <Route path="/download" component={Download}/>
            <Route path="/ppid" component={Ppid}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;