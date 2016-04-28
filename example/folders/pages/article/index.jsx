import React from 'react';
import BEM from 'react-bem-helper';

import ArticleTitle from '../../components/article-title';
import ArticleByline from '../../components/article-byline';
import ArticleBody from '../../components/article-body';

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
