import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import PostStatusList from "./PostStatusList";
import PostCard from "./PostCard";
import moment from "moment";

const AppContents = () => {
  const { data } = useContext(AppContext);

  return (
    <section className="App-contents">
      <div className="Post-container">
        <PostStatusList />

        {Object.keys(data.posts_by_date).map((date, i) => (
          <div key={i} className="Post-date">
            <p className="Post-date-time">
              <time dateTime={`${date}`}>
                {moment(date).format("DD MMMM YYYY")}
              </time>
            </p>
            <div className="Post-cards">
              {Object.keys(data.posts_by_date[date]).map((post, i) => (
                <div key={i} className="Post-card">
                  <PostCard data={data} date={date} post={post} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppContents;
