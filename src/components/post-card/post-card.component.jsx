import "./post-card.styles.css";
import moment from "moment";
import noImage from "../../images/no-post-image.png";
import PendingIcon from "@mui/icons-material/Pending";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PostCardStatus from "../post-card-status/post-card-status";

const PostCard = ({ data, date, post }) => {
  const addDefaultSrc = (e) => {
    e.target.src = noImage;
  };

  return (
    <div className="post-card-container">
      <PostCardStatus data={data} date={date} post={post} />

      <div className="post-card-parts">
        <div className="post-card-head">
          <div className="post-card-date">
            <p>
              {moment(data.posts_by_date[date][post].created_at).format(
                "DD MMMM YYYY - h:mm"
              )}
            </p>
          </div>

          <div className="post-card-acts">
            <button className="act-btn" data-testid="act-btn-1">
              <RemoveCircleIcon />
            </button>
            <button className="act-btn" data-testid="act-btn-2">
              <PendingIcon />
            </button>
          </div>
        </div>

        <div className="post-card-body">
          <div className="post-card-text">
            <p>{data.posts_by_date[date][post].entry.message}</p>
          </div>

          <div className="post-card-media">
            <img
              src={data.posts_by_date[date][post].entry.image}
              onError={addDefaultSrc}
              alt="post_img"
            />
          </div>
        </div>

        <div className="post-card-foot">
          <div className="post-card-stats">
            <ThumbUpOffAltIcon className="stats-icon" />
            <span className="stats-text">1</span>

            <ChatBubbleOutlineIcon className="stats-icon" />
            <span className="stats-text">10</span>

            <ShareIcon className="stats-icon" />
            <span className="stats-text">100</span>

            <VisibilityIcon className="stats-icon" />
            <span className="stats-text">1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
