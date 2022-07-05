
import './App.css';
import Profile from  './components/Profile/Profile';
import Statistics from  './components/Statistics/Statistics.jsx';
import FriendList from './components/Friends/Friendlist.jsx';
import TransitionHistory from './components/Transaction/TransactionHistory.jsx';

import user from './data/user.json';

function App() {
  return (
    <div className="App">
     <Profile
      username={user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
     <Statistics/>
     <FriendList/>
     <TransitionHistory/>

    </div>
  );
}

export default App;
