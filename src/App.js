import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import db from './firebase';
import { auth } from './firebase';
import Message from './Message';

function App() {


  return (
    <div className="app">
        <Router>
          <Route path='/'>
          <div className="chatbody">
          <div className="innerborder">
            <Message />  
          </div>
            <div className="roundbutton">
              <div className="buttondesign">O</div>
            </div>
          </div>
          </Route>
      </Router>
    </div>
    
  );
}

export default App;
