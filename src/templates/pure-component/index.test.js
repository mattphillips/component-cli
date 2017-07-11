import each from 'jest-each';
import pureComponent from './';

describe('Pure Component', () => {
  it('returns name as component/propTypes/defaultProps/export', () => {
    const options = {
      name: 'Header'
    };
    expect(pureComponent(options)).toMatchSnapshot();
  });

  each([
    ['css'],
    ['scss'],
    ['sass'],
    ['less']
  ]).it('returns import with correct suffix: %s when approach is imported', stylesSuffix => {
    const options = {
      name: 'Header',
      stylesApproach: 'imported',
      stylesSuffix
    };
    expect(pureComponent(options)).toMatchSnapshot();
  });

  it('returns radium import when styling is radium', () => {
    const options = {
      name: 'Header',
      stylesApproach: 'radium'
    };
    expect(pureComponent(options)).toMatchSnapshot();
  });

  each([
    ['css'],
    ['scss'],
    ['sass'],
    ['less']
  ]).it('returns styles import with correct suffix: %s when approach is css-modules', stylesSuffix => {
    const options = {
      name: 'Header',
      stylesApproach: 'css-modules',
      stylesSuffix
    };
    expect(pureComponent(options)).toMatchSnapshot();
  });

  it('returns styles from javascript import when approach is styled components', () => {
    const options = {
      name: 'Header',
      stylesApproach: 'styled-components'
    };
    expect(pureComponent(options)).toMatchSnapshot();
  });
});
