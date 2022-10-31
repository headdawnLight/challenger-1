import PendingIcon from "@mui/icons-material/Pending";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PostCardStatus from "./PostCardStatus";
import noImage from "../../images/no-post-image.png";
import moment from "moment";

const PostCard = ({ data, date, post }) => {
  const addDefaultSrc = (e) => {
    e.target.src = noImage;
  };

  return (
    <div className="Post-card-container">
      <PostCardStatus data={data} date={date} post={post} />

      <div className="Post-card-parts">
        <div className="Post-card-head">
          <div className="Post-card-date">
            <p>
              {moment(data.posts_by_date[date][post].created_at).format(
                "DD MMMM YYYY - h:mm"
              )}
            </p>
          </div>

          <div className="Post-card-actions">
            <button className="Actions-buttons" data-testid="act-btn-1">
              <RemoveCircleIcon fontSize="large" />
            </button>
            <button className="Actions-buttons" data-testid="act-btn-2">
              <PendingIcon fontSize="large" />
            </button>
          </div>
        </div>

        <div className="Post-card-body">
          <div className="Post-card-text">
            <p>{data.posts_by_date[date][post].entry.message}</p>
          </div>

          <div className="Post-card-media">
            <img
              src={data.posts_by_date[date][post].entry.image}
              onError={addDefaultSrc}
              alt="post_img"
            />
          </div>
        </div>

        <div className="Post-card-foot">
          <div className="Post-card-stats">
            <button className="Stats-buttons">
              <ThumbUpOffAltIcon fontSize="large" />
              <span className="Stat-text">1</span>
            </button>
            <button className="Stats-buttons">
              <ChatBubbleOutlineIcon fontSize="large" />
              <span className="Stat-text">10</span>
            </button>
            <button className="Stats-buttons">
              <ShareIcon fontSize="large" />
              <span className="Stat-text">100</span>
            </button>
            <button className="Stats-buttons">
              <VisibilityIcon fontSize="large" />
              <span className="Stat-text">1000</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
