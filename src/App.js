
import './App.css';
import Profile from  './components/Profile/Profile';
import Statistics from  './components/Statistics/Statistics.jsx';
import FriendList from 'components/FriendList/FriendList.jsx';
import TransitionHistory from './components/Transaction/TransactionHistory.jsx';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

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
     <Statistics title = 'UPLOAD STATS' stats = {statisticalData}/>
     <FriendList friends={friends}/>
     <TransitionHistory/>

    </div>
  );
}

export default App;
