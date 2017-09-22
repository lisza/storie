import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: ""
      // author_id: this.props.currentUser[id]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  // This might not work either...
  handleSubmit(event) {
    event.preventDefault();
    const storyData = Object.assign({}, this.state)

    this.props.createStory( storyData )
    //   .then(story => {
    //     this.props.history.push(`/stories/${Object.keys(story)[0]}`)
    // })
  }

  render() {

    return (
      <form className="story-form">
        <input className="story-form-input-title"
          value={this.state.title}
          placeholder="Title"
          onChange={this.handleChange('title')}
          required />
        <br />
        <input className="story-form-input-description"
          value={this.state.description}
          placeholder="Description"
          onChange={this.handleChange('description')}
          required />
        <br />
        <textarea className="story-form-textarea-body"
          value={this.state.body}
          placeholder="Write your story..."
          onChange={this.handleChange("body")}
          required />
        <br />
        <button className="story-publish-button" onClick={this.handleSubmit}>
          Publish
        </button>
      </form>
    )
  }
}

export default withRouter(StoryForm);
