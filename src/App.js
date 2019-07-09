import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Berita} from './Berita';
import {Home} from './Home';
import {Galeri} from './Galeri';
import {Struktur} from './Struktur';
import {Visi} from './Visi';
import {Tugas} from './Tugas';
import {Ideo} from './Ideo';
import {Ketahanan} from './Ketahanan';
import {Politik} from './Politik';
import {Sekre} from './Sekre';
import {Regulasi} from './Regulasi';
import {Ppid} from './Ppid';
import {PpidBerkala} from './PpidBerkala';
import {PpidSetiapSaat} from './PpidSetiapSaat';
import {PpidSertaMerta} from './PpidSertaMerta';
import {Download} from './Download';
import Kontak from './Kontak';

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
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
            <Route path="/ppidberkala" component={PpidBerkala}/>
            <Route path="/ppidsetiapsaat" component={PpidSetiapSaat}/>
            <Route path="/ppidsertamerta" component={PpidSertaMerta}/>
            <Route path="/kontak" component={Kontak}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;