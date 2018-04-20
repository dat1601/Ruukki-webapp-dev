import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ThreeContainer } from 'src/features/common';

describe('common/ThreeContainer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ThreeContainer />
    );

    expect(
      renderedComponent.find('.common-three-container').getElement()
    ).to.exist;
  });
});
