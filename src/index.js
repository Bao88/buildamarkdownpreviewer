import React from 'react';
import ReactDOM from 'react-dom';
import "./css/main.css";
var marked = require("marked");

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
        // alert(marked("I am using __markdown__"));
        // event.key;
        // alert();
        var preview = { __html: marked(event.target.value, {sanitize:true})};
        this.setState({str: <span dangerouslySetInnerHTML={preview}/>});
    }

    handleKeyPress = (event) => {
        // alert(event.key);
        if(event.key === "Enter"){
            console.log(this.state.str);
            var preview = { __html: marked("hello", {sanitize:true})};
            this.setState({str: <span dangerouslySetInnerHTML={preview}/>});
            console.log(this.state.str);
            // var preview = { __html: marked(this.state.str + "\n", {sanitize:true}) + " Hello"};
            
            // this.setState({str: <span dangerouslySetInnerHTML={preview}/>});

            // alert("Enter");
            // this.setState({str: this.state.str + });
            // alert(this.state.str);
            // document.getElementById("previewer").appendChild(document.createElement("br"));
            // document.getElementById("previewer").appendChild(document.createElement("br"));
        }
        // this.setState({str: event.key});
    }
    state = {str: null};

    render(){
        return (
            <div>
                <textarea id="marker" className="split" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></textarea>
                <span id="previewer" className="split">
                    {this.state.str}
                    {/* <Marked className="split" mark={this.state.str}/> */}
                </span>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
// registerServiceWorker();
