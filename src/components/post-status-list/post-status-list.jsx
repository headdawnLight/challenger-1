import "./post-status-list.css";

const PostStatusList = () => {
  return (
    <div className="post-status">
      <span id="Published">Published</span>
      <span id="Scheduled">Scheduled</span>
      <span id="Need-Approval">Need Approval</span>
      <span id="Error">Error</span>
      <span id="Notes">Notes</span>
    </div>
  );
};

export default PostStatusList;
