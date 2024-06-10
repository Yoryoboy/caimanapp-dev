import styles from "./UserPage.module.css";
import IconButton from "../components/IconButton";
import Icon from "../components/Icon";

function UserPage() {
  return (
    <div className={styles.userProfileBackground}>
      <div className={styles.userProfileHeader}>
        <IconButton
          iconClass="fi fi-ss-menu-burger"
          iconColor="#FAFAFA"
          backgroundColor="#161024"
        />
      </div>
      <div className={styles.userProfileInfo}>
        <img className={styles.userPic} src="user-pic.jpg" alt="profile" />
        <div className={styles.userInfo}>
          <h1 className={styles.profileName}>Jorge Díaz</h1>
          <p className={styles.username}>Username: Yoryoboy</p>
        </div>
        <div className={styles.userDetails}>
          <div className={styles.statItem}>
            <Icon icon="fi-rs-calendar" color="#828282" />
            <p className={styles.statText}>1990</p>
          </div>
          <div className={styles.statItem}>
            <Icon icon="fi-rs-star" color="#FFCC00" />
            <p className={styles.statText}>4.5</p>
          </div>
          <div className={styles.statItem}>
            <Icon icon="fi-rs-calendar" color="#828282" />
            <p className={styles.statText}>VE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
