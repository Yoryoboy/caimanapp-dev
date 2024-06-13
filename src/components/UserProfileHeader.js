import IconButton from "./IconButton";

import styles from "./UserProfileHeader.module.css";

function UserProfileHeader() {
  return (
    <div className={styles.userProfileHeader}>
      <IconButton
        iconClass="fi fi-ss-menu-burger"
        iconColor="#FAFAFA"
        backgroundColor="#161024"
      />
    </div>
  );
}

export default UserProfileHeader;
