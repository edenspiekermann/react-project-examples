import React from 'react';
import BEM from 'react-bem-helper';

import ArticleTitle from './title';
import ArticleByline from './byline';
import ArticleBody from './body';

const classes = new BEM('article-page');

export default React.createClass({

  displayName: 'ArticlePage',

  propTypes: {
    title: React.PropTypes.object.isRequired,
    byline: React.PropTypes.object.isRequired,
    body: React.PropTypes.object.isRequired
  },

  render () {
    const { title, byline, body } = this.props;

    return (
      <article {...classes()}>
        <ArticleTitle {...title} />
        <ArticleByline {...byline} />
        <ArticleBody {...body} />
      </article>
    );
  }

});
