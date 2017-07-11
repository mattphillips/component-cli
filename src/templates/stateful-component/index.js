const stylesImport = stylesSuffix => {
  return {
    imported: `import 'styles.${stylesSuffix}';`,
    radium: "import radium from 'radium';",
    'css-modules': `import styles from './styles.${stylesSuffix}';`,
    'styled-components': "import styles from './styles';"
  };
};

export default ({ name, stylesApproach, stylesSuffix }) => {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
${stylesImport(stylesSuffix)[stylesApproach]}

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
};
