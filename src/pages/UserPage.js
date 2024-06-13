import styles from "./UserPage.module.css";
import UserProfileHeader from "../components/UserProfileHeader";
import UserDetails from "../components/UserDetails";
import UserMetrics from "../components/UserMetrics";

function UserPage() {
  return (
    <div className={styles.userProfileBackground}>
      <UserProfileHeader />
      <UserDetails />
      <UserMetrics />
    </div>
  );
}

export default UserPage;
