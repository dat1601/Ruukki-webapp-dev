import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BuildingComp } from 'src/features/home/BuildingComp';

describe('home/BuildingComp', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BuildingComp {...props} />
    );

    expect(
      renderedComponent.find('.home-building-comp').getElement()
    ).to.exist;
  });
});
