import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import moment from "moment";
import noImage from "../images/no-post-image.png";

const AppContents = () => {
  const data = require("../data.json");

  console.log(data);

  const addDefaultSrc = (e) => {
    e.target.src = noImage;
  };

  return (
    <section className="App-contents">
      <div className="Post-container">
        <div className="Post-date">
          {Object.keys(data.posts_by_date).map((date, i) => (
            <div key={i}>
              <p>
                <time dateTime={`${date}`}>
                  {moment(date).format("DD MMMM YYYY")}
                </time>
              </p>

              {Object.keys(data.posts_by_date[date]).map((post, i) => (
                <div key={i}>
                  <div className="Post-card">
                    <div className="Post-card-container">
                      <div className="Post-card-status">
                        {data.posts_by_date[date][post].status === 3 ? (
                          <div id="Published-status"></div>
                        ) : data.posts_by_date[date][post].status === 1 ? (
                          <div id="Scheduled-status"></div>
                        ) : data.posts_by_date[date][post].status === 0 ? (
                          <div id="Need-Approval-status"></div>
                        ) : data.posts_by_date[date][post].status === 4 ? (
                          <div id="Error-status"></div>
                        ) : (
                          <div id="Notes-status"></div>
                        )}

                        <div className="Post-card-channel">
                          {data.posts_by_date[date][post].account.channel ===
                          "instagrambusiness" ? (
                            <div className="Channel">
                              <InstagramIcon fontSize="large" />
                            </div>
                          ) : data.posts_by_date[date][post].account.channel ===
                            "facebook" ? (
                            <div className="Channel">
                              <FacebookIcon fontSize="large" />
                            </div>
                          ) : data.posts_by_date[date][post].account.channel ===
                            "twitter" ? (
                            <div className="Channel">
                              <TwitterIcon fontSize="large" />
                            </div>
                          ) : (
                            <div className="Channel">
                              <RedditIcon fontSize="large" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="Post-card-head">
                        <div className="Post-card-date">
                          <p>
                            {moment(
                              data.posts_by_date[date][post].created_at
                            ).format("DD MMMM YYYY, h:mm")}
                          </p>
                        </div>

                        <div className="Post-card-actions">
                          <button className="Actions-buttons">
                            <TwitterIcon fontSize="large" />
                          </button>
                          <button className="Actions-buttons">
                            <RedditIcon fontSize="large" />
                          </button>
                          <button className="Actions-buttons">
                            <FacebookIcon fontSize="large" />
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
                            <TwitterIcon fontSize="large" />
                          </button>
                          <button className="Stats-buttons">
                            <RedditIcon fontSize="large" />
                          </button>
                          <button className="Stats-buttons">
                            <FacebookIcon fontSize="large" />
                          </button>
                          <button className="Stats-buttons">
                            <FacebookIcon fontSize="large" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppContents;
