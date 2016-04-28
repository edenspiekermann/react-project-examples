import React from 'react';
import BEM from 'react-bem-helper';

const classes = new BEM('article-title');

export default React.createClass({

  displayName: 'ArticleTitle',

  propTypes: {
    text: React.PropTypes.string.isRequired,
    suffix: React.PropTypes.string
  },

  render () {
    const { text, suffix } = this.props;

    return (
      <h1 {...classes()}>
        { text }
        { suffix
          ? <em {...classes('suffix')}>{ suffix }</em>
        : null }
      </h1>
    );
  }

});
