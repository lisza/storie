import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      body: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    // fetch data & prefill form if in edit mode
    if (this.props.formType === 'edit') {
      this.props.fetchStory(this.props.match.params.storyId)
        .then(() => {
          if (this.validateOwnership(this.props.story.author.author_id)) {
            // show edit form
            this.prefillForm(this.props.story);
          } else {
            // redirect to read only story
            this.props.history.push(`/stories/${this.props.story.id}`)
          }
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.refreshForm(nextProps);
    }
  }

  validateOwnership(authorId) {
    return this.props.currentUser.id === authorId;
  }

// FOR EDIT FORM
  prefillForm(data) {
    this.setState({
      id: data.id,
      title: data.title,
      description: data.description || "",
      body: data.body,
      imageFile: data.imageFile,
      imageUrl: data.image_url,
    });
  }  

  refreshForm(nextProps) {
  // switching from /edit to /new clears form, prefills form otherwise
    if (nextProps.location.pathname === "/stories/new") {
      this.setState({
        title: "",
        description: "",
        body: "",
        imageFile: null,
        imageUrl: null,
      });
    } else if (nextProps.formType === "edit" &&
      this.props.formType !== "edit") {
        if (nextProps.story) {
          if (this.validateOwnership(nextProps.story.author.author_id)) {
            this.prefillForm(nextProps.story);
          }
        }
    }
  }

  // Image upload handleSubmit
  handleSubmit(event) {
    event.preventDefault();

    // Create formData object to pass to API. Replaces this.state to
    // account for imageFiles.
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[description]", this.state.description);
    formData.append("story[body]", this.state.body);
    if (file) formData.append("story[image]", file);
    // Make form work for updateStory when an id is required
    if (this.props.story) formData.append("story[id]", this.props.story.id);

    // FOR NEW FORM
    if (this.props.formType === "new") {
      this.props.createStory(formData)
        .then(({ story }) => (
          this.props.history.push(`/stories/${story.id}`)
      ));
    }
    // FOR EDIT FORM
    else if (this.props.formType === "edit") {
      this.props.updateStory(formData)
        .then(() => {
          this.props.history.push(`/stories/${this.props.story.id}`)
        });
    }
  }

  handleChange(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
      this.resizeForm(event);
    }
  }

  updateFile(event) {
    let file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  resizeForm(event) {
    const form = event.currentTarget;
    form.style.height = "40px";
    form.style.height = (form.scrollHeight) + "px";
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
          <img src={this.state.imageUrl} />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={this.updateFile} />
          <br />
          <textarea className="story-form-textarea-body"
            value={this.state.body}
            placeholder="Write your story..."
            onChange={this.handleChange("body")}
            required />
          <br />

          <button className="story-publish-button" onClick={this.handleSubmit}>
            { (this.props.formType === 'edit') ? "Update Story" : "Publish" }
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(StoryForm);
