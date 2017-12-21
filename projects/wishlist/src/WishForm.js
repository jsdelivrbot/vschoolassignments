import React, {Component} from "react";
import style from "./style.css";

class WishForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: ''};
    this.handleAuthorChange =
    this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.author} said "${this.state.text}"`)
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit }>
       <input type="text" placeholder="Your name... "
       className="wishFormAuthor" value={ this.state.author }
       onChange={ this.handleAuthorChange } />
       <input type="text" placeholder="Make a wish... " className="wishFormText"
       value={ this.state.text } onChange={ this.handleTextChange } />
       <input type="submit" className="wishFormPost"
       value="Post" />
     </form>
    )
  }
}

export default WishForm;
