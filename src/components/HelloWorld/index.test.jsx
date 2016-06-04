import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';

import HelloWorld from '.';

describe('<HelloWorld />', () => {
    it('has four language options', () => {
        const wrapper = render(<HelloWorld />);
        expect(wrapper.find('option')).to.have.length(4);
    });

    it('has the "English" option selected by default', () => {
        const wrapper = mount(<HelloWorld />);
        expect(wrapper.state('language')).to.equal('English');
        expect(wrapper.find('option[value="English"]')).selected();
        expect(wrapper.contains(<span>Hello World</span>)).to.be.true;
    });

    it('changes the message when a different option is clicked', () => {
        const wrapper = mount(<HelloWorld />);
        wrapper.find('option[value="Chinese"]').simulate('change');
        expect(wrapper.state('language')).to.equal('Chinese');
        expect(wrapper.contains(<span>Hello World</span>)).to.be.false;
        expect(wrapper.contains(<span>你好世界</span>)).to.be.true;
    });
});
