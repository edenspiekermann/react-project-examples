import React from 'react';
import BEM from 'react-bem-helper';

const classes = new BEM('article-body');

export default React.createClass({

  displayName: 'ArticleBody',

  propTypes: {
    type: React.PropTypes.string,
    content: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element)
    ])
  },

  getDefaultProps: () => ({
    type: 'copy'
  }),

  render () {
    const { type, content, children } = this.props;

    return (
      <div {...classes()}>
        { content
          ? <div {...classes('inner', type)} dangerouslySetInnerHTML={{ __html: content }} />
        : null }
        { children
          ? <div {...classes('inner', type)}>{ children }</div>
        : null }
      </div>
    );
  }

});
