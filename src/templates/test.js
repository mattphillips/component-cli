export default ({ name }) => `import React from 'react';
import { shallow } from 'enzyme';

import ${name} from './';

describe('<${name} />', () => {
  it('renders with no props', () => {
    const component = shallow(<${name} />);
    expect(component).toMatchSnapshot();
  });

  it('renders with props', () => {
    const props = {};
    const component = shallow(<${name} {...props} />);
    expect(component).toMatchSnapshot();
  });
});
`;
