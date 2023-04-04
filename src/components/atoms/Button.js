import '../../styles/Button.css'

function SubmitButton(props) {
    return (
      <button
        type="button"
        style={{ height: "55px", width: "100%" }}
        onClick={props.handleSubmit}
      >
        Submit
      </button>
    );
}
function descarga(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
    });
}

function DownloadButton(props) {
    //console.log('Ok downloading: ');
    //console.log(props.target);
    return (
        <a href={props.target} target="_blank" rel="noreferrer" className="download-item" onClick={()=>descarga(props.target)}>
            <button type="button" className="download-button">
                {props.text}
            </button>
        </a>
    );
}

export { SubmitButton, DownloadButton };
  