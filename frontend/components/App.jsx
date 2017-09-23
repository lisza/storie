import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import StoriesIndexContainer from './stories/stories_index_container';
import StoryFormContainer from './stories/story_form_container';
import ShowStoryContainer from './stories/show_story_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <section>
    <header>
      <NavbarContainer />
    </header>

    <Route exact path="/" component={StoriesIndexContainer} />
    <Route path="/stories/:storyId" component={ShowStoryContainer} />
    <ProtectedRoute path="/stories/new" component={StoryFormContainer} />
  </section>
);

export default App;

// <AuthRoute path="/" component={SessionFormContainer} />
// TODO How to make it show the login modal upon clicking a
// protected Route when not logged in?
