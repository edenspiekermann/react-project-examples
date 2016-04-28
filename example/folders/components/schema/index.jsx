import React from 'react';

export default React.createClass({

  displayName: 'Schema',

  propTypes: {
    items: React.PropTypes.object.isRequired
  },

  render () {
    const { items } = this.props;

    if (!items || !items.length) {
      return null;
    }

    return (
      <span>
        {Object.keys(items).map((schemaItem, index) => {
          if (items[schemaItem]) {
            return <meta itemProp={schemaItem} content={items[schemaItem]} key={index} />;
          }
        })}
      </span>
    );
  }

});
