import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import StoriesIndexContainer from './stories/stories_index_container';
import StoryFormContainer from './stories/story_form_container';
import ShowStoryContainer from './stories/show_story_container';
import UserProfileContainer from './users/user_profile_container';
import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <section>
    <header>
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path="/" component={StoriesIndexContainer} />
      <ProtectedRoute path="/stories/new"
            component={StoryFormContainer} formType="new" />
      <Route exact path="/stories/:storyId" component={ShowStoryContainer} />
      <ProtectedRoute path="/stories/:storyId/edit"
            component={ StoryFormContainer} formType="edit"/>
      <Route path="/users/:userId" component={UserProfileContainer}/>
    </Switch>

    <Footer />
  </section>
);

export default App;
