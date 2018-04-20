import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GeneralLights } from 'src/features/three-js';

describe('three-js/GeneralLights', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <GeneralLights />
    );

    expect(
      renderedComponent.find('.three-js-general-lights').getElement()
    ).to.exist;
  });
});
