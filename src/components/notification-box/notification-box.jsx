import "./notification-box.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const NotificationsBox = () => {
  return (
    <div className="notifications-box">
      <NotificationsActiveIcon />
      <h2>NOTIFICATIONS</h2>
      <div className="num-box">29</div>
    </div>
  );
};

export default NotificationsBox;
