const PostStatusList = () => {
  return (
    <div className="Post-status">
      <ul className="Post-status-list">
        <li id="Published">
          <span className="Status-text">Published</span>
        </li>
        <li id="Scheduled">
          <span className="Status-text">Scheduled</span>
        </li>
        <li id="Need-Approval">
          <span className="Status-text">Need Approval</span>
        </li>
        <li id="Error">
          <span className="Status-text">Error</span>
        </li>
        <li id="Notes">
          <span className="Status-text">Notes</span>
        </li>
      </ul>
    </div>
  );
};

export default PostStatusList;
