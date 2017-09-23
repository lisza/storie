import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      title: "",
      description: "",
      body: "",
      image_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createStory(this.state)
      .then(({ story }) => (
        this.props.history.push(`/stories/${story.id}`)
    ));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <form className="story-form">

        <div className="session-errors">{this.renderErrors()}</div>

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
