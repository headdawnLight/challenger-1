import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const AppBrands = () => {
  return (
    <section className="App-brands">
      <div className="Brand-container">
        <button className="Brands-buttons">
          <FacebookIcon fontSize="large" />
        </button>
        <button className="Brands-buttons">
          <InstagramIcon fontSize="large" />
        </button>
        <button className="Brands-buttons">
          <TwitterIcon fontSize="large" />
        </button>
        <button className="Brands-buttons">
          <RedditIcon fontSize="large" />
        </button>
        <button className="Brands-buttons">
          <TelegramIcon fontSize="large" />
        </button>
        <button className="Brands-buttons">
          <WhatsAppIcon fontSize="large" />
        </button>
      </div>
    </section>
  );
};

export default AppBrands;
