import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UpdateBlocker } from 'src/features/common';

describe('common/UpdateBlocker', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <UpdateBlocker />
    );

    expect(
      renderedComponent.find('.common-update-blocker').getElement()
    ).to.exist;
  });
});
