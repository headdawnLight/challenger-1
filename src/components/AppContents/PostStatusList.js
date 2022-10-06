const PostStatusList = () => {
  return (
    <div className="Post-status">
      <p id="Published">
        <span className="Status-text">Published</span>
      </p>
      <p id="Scheduled">
        <span className="Status-text">Scheduled</span>
      </p>
      <p id="Need-Approval">
        <span className="Status-text">Need Approval</span>
      </p>
      <p id="Error">
        <span className="Status-text">Error</span>
      </p>
      <p id="Notes">
        <span className="Status-text">Notes</span>
      </p>
    </div>
  );
};

export default PostStatusList;
