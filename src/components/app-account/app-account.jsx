import "./app-account.css";
import profilePhoto from "../../images/profile-photo.png";

const AppAccount = () => {
  return (
    <div className="app-account">
      <img src={profilePhoto} alt="profile_photo" />
    </div>
  );
};

export default AppAccount;
