import styles from "./UserPage.module.css";
import UserProfileHeader from "../components/UserProfileHeader";
import UserDetails from "../components/UserDetails";
import UserMetrics from "../components/UserMetrics";
import CreatedGroups from "../components/CreatedGroups";

function UserPage() {
  return (
    <div className={styles.userProfileBackground}>
      <UserProfileHeader />
      <UserDetails />
      <UserMetrics />
      <CreatedGroups />
    </div>
  );
}

export default UserPage;
