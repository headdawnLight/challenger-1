import "./post-card-channel.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const PostCardChannel = ({ data, date, post }) => {
  return (
    <div className="post-card-channel">
      {data.posts_by_date[date][post].account.channel ===
      "instagrambusiness" ? (
        <InstagramIcon />
      ) : data.posts_by_date[date][post].account.channel === "facebook" ? (
        <FacebookIcon />
      ) : data.posts_by_date[date][post].account.channel === "twitter" ? (
        <TwitterIcon />
      ) : (
        <RedditIcon />
      )}
    </div>
  );
};

export default PostCardChannel;
