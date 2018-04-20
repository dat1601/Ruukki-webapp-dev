import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Overview } from 'src/features/home/Overview';

describe('home/Overview', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Overview {...props} />
    );

    expect(
      renderedComponent.find('.home-overview').getElement()
    ).to.exist;
  });
});
