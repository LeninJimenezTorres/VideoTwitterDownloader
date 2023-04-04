import { DownloadButton } from "../atoms/Button";
import '../../styles/Results.css'
function Success(props) {
    return (
        <div className="results-in">
            <div className="results-in-sub">
                <div className="results-img">
                    <div className="tweet-name">
                        {/* <h4>Tweet Name:</h4> */}
                        <a
                            href={`https://twitter.com/${props.data.username}`}
                            className="text-decoration-none"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <p>{props.data.name}</p>
                        </a>
                    </div>
                    <img src={props.data.thumbnail} alt="..."/>
                    <div className="results-options">
                        <div className="results-options-in">
                            
                            <div className="card-text">
                                <p>Available resolutions:</p>
                                <div className="buttons">
                                    {props.data.videos.map((e, i) => {
                                        return <DownloadButton key={i} target={e.url} text={e.size} />;
                                        console.log('Ok')
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="results-video">
                    <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="auto"
                        height="auto"
                        src={props.data.videos[0].url}>
                    </iframe>
                </div>
                
            </div>
        </div>
    );
}

function Processing() {
  return (
    <div className="processing-container">
      <div className="procesing-in" role="status">
        {/* <span className="loading">Loading...</span> */}
        <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
        </div>
      </div>
    </div>
  );
}

function Failed(props) {
  return (
    <div className="failed">
      <h3>{props.message}</h3>
    </div>
  );
}

export { Success, Processing, Failed };
