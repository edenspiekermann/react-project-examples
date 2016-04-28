import React from 'react';
import BEM from 'react-bem-helper';

const classes = new BEM('alert');

export default React.createClass({

  displayName: 'Alert',

  propTypes: {
    text: React.PropTypes.string.isRequired,
    modifier: React.PropTypes.string
  },

  render () {
    const { text, modifier } = this.props;

    return (
      <div {...classes({ modifier: modifier })}>
        <strong {...classes('text')}>{ text }</strong>
      </div>
    );
  }

});
