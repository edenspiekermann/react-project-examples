import React from 'react';
import BEM from 'react-bem-helper';
import Schema from '../../schema';

const classes = new BEM('article-byline');

export default React.createClass({

  displayName: 'ArticleByline',

  propTypes: {
    text: React.PropTypes.string.isRequired,
    schema: React.PropTypes.object
  },

  render () {
    const { text, schema } = this.props;

    return (
      <div {...classes()}>
        <p {...classes('text')}>{ text }</p>
        <Schema {...schema} />
      </div>
    );
  }

});
