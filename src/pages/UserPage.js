import styles from "./UserPage.module.css";
import UserProfileHeader from "../components/UserProfileHeader";
import UserDetails from "../components/UserDetails";
import UserMetrics from "../components/UserMetrics";
import CreatedGroups from "../components/CreatedGroups";
import UpcomingMatches from "../components/UpcomingMatches";

const button = [
  {
    backgroundColor: "linear-gradient(95.57deg, #DD8272 44.54%, #D8756E 60.7%)",
    width: "100%",
    color: "#FAFAFA",
    border: "1px solid #D8756E",
    label: "Detalles del partido",
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
