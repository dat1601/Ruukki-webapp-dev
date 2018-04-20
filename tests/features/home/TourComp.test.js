import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TourComp } from 'src/features/home';

describe('home/TourComp', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <TourComp />
    );

    expect(
      renderedComponent.find('.home-tour-comp').getElement()
    ).to.exist;
  });
});
