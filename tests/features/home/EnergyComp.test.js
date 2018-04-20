import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { EnergyComp } from 'src/features/home/EnergyComp';

describe('home/EnergyComp', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <EnergyComp {...props} />
    );

    expect(
      renderedComponent.find('.home-energy-comp').getElement()
    ).to.exist;
  });
});
