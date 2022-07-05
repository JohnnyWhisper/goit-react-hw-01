
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
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape (
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    },
  ) 
};


export default Profile;