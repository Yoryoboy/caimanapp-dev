import styles from "./UserPage.module.css";
import UserProfileHeader from "../components/UserProfileHeader";
import UserDetails from "../components/UserDetails";
import UserMetrics from "../components/UserMetrics";
import CreatedGroups from "../components/CreatedGroups";
import UpcomingMatches from "../components/UpcomingMatches";

const button = [
  {
    backgroundColor: "#3C2E5A",
    width: "100%",
    color: "#FAFAFA",
    border: "1px solid #D8756E",
    label: "Ver más",
    onClick: () => alert("Ver más"),
  },
];

function UserPage() {
  return (
    <div className={styles.userProfileBackground}>
      <UserProfileHeader />
      <UserDetails />
      <UserMetrics />
      <CreatedGroups />
      <UpcomingMatches buttons={button} />
    </div>
  );
}

export default UserPage;
