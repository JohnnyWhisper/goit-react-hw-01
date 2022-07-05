
import styles from './Profile.module.css';
import PropTypes from 'prop-types';


const Profile = (props) => (
<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={props.avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{props.username}</p>
    <p class="tag">@{props.tag}</p>
  <p className={styles.location}>{props.location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span>Followers</span>
      <span>{props.stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{props.stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{props.stats.likes}</span>
    </li>
  </ul>
</div>

);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  },
};


export default Profile;