import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const AppNavbar = () => {
  return (
    <nav className="App-navbar">
      <a className="Navbar-link" href="#0">
        <FacebookIcon sx={{ fontSize: 35 }} />
      </a>

      <a className="Navbar-link" href="#1">
        <InstagramIcon sx={{ fontSize: 35 }} />
      </a>

      <a className="Navbar-link" href="#2">
        <TwitterIcon sx={{ fontSize: 35 }} />
      </a>

      <a className="Navbar-link" href="#3">
        <RedditIcon sx={{ fontSize: 35 }} />
      </a>

      <a className="Navbar-link" href="#3">
        <TelegramIcon sx={{ fontSize: 35 }} />
      </a>

      <a className="Navbar-link" href="#5">
        <WhatsAppIcon sx={{ fontSize: 35 }} />
      </a>
    </nav>
  );
};

export default AppNavbar;
