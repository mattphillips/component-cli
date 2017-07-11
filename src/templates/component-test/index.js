import prettier from 'prettier';

const componentImport = name => {
  return {
    'index.js|x': `import ${name} from './';`,
    'ComponentName.js|x': `import ${name} from './${name}';`
  };
};

export default ({ name, namingConvention }) => {
  return prettier.format(
    `
    import React from 'react';
    import { shallow } from 'enzyme';

    ${componentImport(name)[namingConvention]}

    describe('<${name} />', () => {
      it('renders with props', () => {
        const props = {};
        const component = shallow(<${name} {...props} />);
        expect(component).toMatchSnapshot();
      });
    });
  `,
    { printWidth: 120, singleQuote: true }
  );
};
