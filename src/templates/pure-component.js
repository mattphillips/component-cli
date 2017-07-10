export default ({ name }) => `import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ${name} = props => {
  return (

  );
};

${name}.propTypes = {
};

${name}.defaultProps = {
};

export default ${name};
`;
