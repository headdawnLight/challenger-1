import PostCardChannel from "./PostCardChannel";

const PostCardStatus = ({ data, date, post }) => {
  return (
    <div
      className="Post-card-status"
      style={
        data.posts_by_date[date][post].status === 3
          ? { backgroundColor: "gray" }
          : data.posts_by_date[date][post].status === 1
          ? { backgroundColor: "green" }
          : data.posts_by_date[date][post].status === 0
          ? { backgroundColor: "orange" }
          : data.posts_by_date[date][post].status === 4
          ? { backgroundColor: "red" }
          : { backgroundColor: "blue" }
      }
    >
      <PostCardChannel data={data} date={date} post={post} />
    </div>
  );
};

export default PostCardStatus;
