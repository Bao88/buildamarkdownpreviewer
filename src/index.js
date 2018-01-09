import React from 'react';
import ReactDOM from 'react-dom';
import "./css/main.css";
var marked = require("marked");
const ReactMarkdown = require("react-markdown");

class Marked extends React.Component {
    convertTextToMarkdown(mark){
        // alert(mark);
        var markup = marked(mark, {sanitize: true});
        return { __html: markup };
    }
    render(){
        return (<div dangerouslySetInnerHTML={this.convertTextToMarkdown(this.props.mark)}/>
        );
    }
}

class Main extends React.Component {
    handleChange = (event) => {
        var preview = { __html: marked(event.target.value, {sanitize:true})};
        this.setState({str: <p dangerouslySetInnerHTML={preview}/>});
    }

    state = {str: null};
    render(){
        return (
            <div>
                {<textarea id="marker" className="split" onChange={this.handleChange}></textarea>}
                <span id="previewer" className="split">
                    {this.state.str}
                </span>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
// registerServiceWorker();
