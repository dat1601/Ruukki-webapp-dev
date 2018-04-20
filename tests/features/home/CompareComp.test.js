import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CompareComp } from 'src/features/home';

describe('home/CompareComp', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <CompareComp />
    );

    expect(
      renderedComponent.find('.home-compare-comp').getElement()
    ).to.exist;
  });
});
