import React from 'react';

<Button label="button" width="80%" />

const TestButton = styled.button`
  color: red;
  width: ${(props) => props.width}
`;

var React = require('react');

var Button = React.createClass({

  render: function () {

    return (
      <TestButton width={this.props.width}>{this.props.label}</TestButton>
     );
    }
  });

module.exports = Button;