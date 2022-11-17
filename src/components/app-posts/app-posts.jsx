import "./app-posts.css";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import PostStatusList from "../post-status-list/post-status-list";
import PostCard from "../post-card/post-card.component";
import moment from "moment";

const AppContents = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="app-posts">
      <PostStatusList />

      {Object.keys(data.posts_by_date).map((date, i) => (
        <div key={i} className="post-date">
          <div className="post-date-time">
            <time dateTime={`${date}`}>
              {moment(date).format("DD MMMM YYYY")}
            </time>
          </div>

          <div className="post-cards">
            {Object.keys(data.posts_by_date[date]).map((post, i) => (
              <div key={i} className="post-card">
                <PostCard data={data} date={date} post={post} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppContents;
