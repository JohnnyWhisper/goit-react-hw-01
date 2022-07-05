import styles from 'components/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({avatar,name,isOnline}) {
  return (
<li className={styles.item}>
  <span className={`${isOnline ? styles.statusOnline : styles.statusOffline}`}/>
  <img className="avatar" src={avatar} alt="" width="48" />
  <p className='name'>{name}</p>
</li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,

};


export default FriendListItem;