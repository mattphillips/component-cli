export default ({ name }) => `import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class ${name} extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

    );
  }
}

${name}.propTypes = {
};

${name}.defaultProps = {
};

export default ${name};
`;
