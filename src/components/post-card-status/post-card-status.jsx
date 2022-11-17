import "./post-card-status.css";
import PostCardChannel from "../post-card-channel/post-card-channel";

const PostCardStatus = ({ data, date, post }) => {
  return (
    <div
      className="post-card-status"
      style={
        data.posts_by_date[date][post].status === 3
          ? { backgroundColor: "#acacac" }
          : data.posts_by_date[date][post].status === 1
          ? { backgroundColor: "#3ac183" }
          : data.posts_by_date[date][post].status === 0
          ? { backgroundColor: "#f7bf38" }
          : data.posts_by_date[date][post].status === 4
          ? { backgroundColor: "#fb6450" }
          : { backgroundColor: "#67b1f2" }
      }
    >
      <PostCardChannel data={data} date={date} post={post} />
    </div>
  );
};

export default PostCardStatus;
