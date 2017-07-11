const stylesImport = stylesSuffix => {
  return {
    imported: `import 'styles.${stylesSuffix}';`,
    radium: "import radium from 'radium';",
    'css-modules': `import styles from './styles.${stylesSuffix}';`,
    'styled-components': "import styles from './styles';"
  };
};

export default ({ name, stylesApproach, stylesSuffix }) => {
  return `import React from 'react';
import PropTypes from 'prop-types';
${stylesImport(stylesSuffix)[stylesApproach]}

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
};
