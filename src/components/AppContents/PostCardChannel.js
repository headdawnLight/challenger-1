import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const PostCardChannel = ({ data, date, post }) => {
  return (
    <div className="Post-card-channel">
      {data.posts_by_date[date][post].account.channel ===
      "instagrambusiness" ? (
        <InstagramIcon fontSize="large" />
      ) : data.posts_by_date[date][post].account.channel === "facebook" ? (
        <FacebookIcon fontSize="large" />
      ) : data.posts_by_date[date][post].account.channel === "twitter" ? (
        <TwitterIcon fontSize="large" />
      ) : (
        <RedditIcon fontSize="large" />
      )}
    </div>
  );
};

export default PostCardChannel;
