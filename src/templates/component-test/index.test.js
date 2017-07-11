import each from 'jest-each';
import componentTest from './';

describe('Component Test', () => {
  it('renders with correct component name', () => {
    expect(componentTest({ name: 'Header' })).toMatchSnapshot();
  });

  each([
    ['index', { name: 'Header', namingConvention: 'index.js|x' }],
    ['component name', { name: 'Header', namingConvention: 'ComponentName.js|x' }]
  ]).it('build template with correct import: %s', (description, options) => {
    expect(componentTest(options)).toMatchSnapshot();
  });
});
