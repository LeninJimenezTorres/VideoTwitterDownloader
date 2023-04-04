function InputText(props) {
    return (
      <input
        type="text"
        placeholder="https://twitter.com/tyomateee/status/1375802764220006405?s=20"
        autoComplete="off"
        onChange={(e) => props.handleInput(e.target.value)}
        onKeyPress={(e) => props.handleKeyPress(e)}
        style={{ height: "100%", width: "100%" }}
        
      />
    );
  }
  
  export default InputText;