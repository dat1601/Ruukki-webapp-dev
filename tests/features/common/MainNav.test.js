import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MainNav } from 'src/features/common/MainNav';

describe('common/MainNav', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MainNav {...props} />
    );

    expect(
      renderedComponent.find('.common-main-nav').getElement()
    ).to.exist;
  });
});
