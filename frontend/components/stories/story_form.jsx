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

    this.formType(); // determines the formType

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

// FOR EDIT FORM
  componentWillReceiveProps(nextProps) {
    this.refreshFormType(nextProps);
  }

// FOR EDIT FORM
  formType() {
    if (this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId)
        .then(() => this.prefillForm());
      this.state.formType = "edit";
    } else {
      this.state.formType = "new";
    }
  }

// FOR EDIT FORM
  prefillForm() {
    this.setState({
      id: this.props.story.id,
      title: this.props.story.title,
      description: this.props.story.description,
      body: this.props.story.body,
      image_url: this.props.story.image_url,
      formType: "edit"
    });
  }

// FOR EDIT FORM
  refreshFormType(nextProps) {
    if (nextProps.location.pathname === "/stories/new" &&
        this.props.location.pathname !== "/stories/new") {
      this.state.formType = "new";
    } else {
      if (nextProps.match.params.storyId &&
          this.state.formType !== "edit") {
        nextProps.fetchStory(nextProps.match.params.storyId)
          .then(() => this.prefillForm());
      }
      this.state.formType = "edit";
    }
  }

  handleChange(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("THIS.PROPS: ", this.props);

    // FOR NEW FORM
    if (this.state.formType === "new") {
      this.props.createStory(this.state)
        .then(({ story }) => (
          this.props.history.push(`/stories/${story.id}`)
      ));
    } else {
      // FOR EDIT FORM
      this.props.updateStory(this.state)
        .then(() => {
          console.log("INSIDE OF THEN LOG OF PROPS: ", this.props);
          this.props.history.push(`/stories/${this.props.story.id}`)
        });
    }
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
      <div className="main-content">
        <form className="story-form">
          <div className="session-errors">{this.renderErrors()}</div>

          <input className="story-form-input-title"
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange('title')}
            required />
          <br />
          <input className="story-form-input-description"
            type="text"
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
            { (this.state.formType === 'edit') ? "Update Story" : "Publish" }
          </button>
        </form>
      </div>  
    )
  }
}

export default withRouter(StoryForm);
