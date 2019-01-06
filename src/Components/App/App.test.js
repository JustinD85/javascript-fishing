import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import Login from '../Login';
import { shallow } from 'enzyme';
import vocabulary from '../../Data/js_fishing';

describe('<App/>', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <App />);
    wrapper.setState({vocabulary});
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('state should not be null', ()=>{
    expect(wrapper.state()).not.toBeNull();
  });


  it('should render login page',()=>{
    expect(wrapper.find(Login)).toHaveLength(1);
  })


});
