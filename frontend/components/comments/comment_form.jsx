import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    this.props.createComment(this.props.storyId, this.state)
      .then(this.setState({ body: "" }));
  }

  handleChange(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
      this.resizeForm(event);
    };
  }

  // scrollHeight example: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
  resizeForm(event) {
    const form = event.currentTarget;
    form.style.height = "40px";
    form.style.height = (form.scrollHeight) + "px";
  }

  render() {
    return (
      <div className="comment-form">
        <img className="user-image-small" src={this.props.currentUser.image_url} />
        <textarea className="comment-form-textarea"
          placeholder="Write a resonse..."
          value={this.state.body}
          onChange={this.handleChange('body')} />
        <button className="comment-form-button" onClick={this.handleSubmit}>
          Publish</button>
      </div>
    )
  }
}

export default CommentForm;
