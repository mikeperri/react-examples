import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';

import TimerManager from '.';
import Timer from '../Timer';

describe('<TimerManager />', () => {
    it('has two timers by default', () => {
        const wrapper = shallow(<TimerManager />);
        expect(wrapper.find(Timer)).to.have.length(2);
    });

    it('creates another timer when the "New Timer" button is clicked', () => {
        const wrapper = mount(<TimerManager />);
        wrapper.findWhere(n => n.type() === 'button' && n.text() === 'New Timer').simulate('click');
        expect(wrapper.find(Timer)).to.have.length(3);
    });

    it('removes a timer when its "X" button is clicked', () => {
        const wrapper = mount(<TimerManager />);
        expect(wrapper.state('timers')).to.eql([ 0, 1 ]);
        wrapper.findWhere(n => n.type() === 'button' && n.text() === 'X').at(0).simulate('click');
        expect(wrapper.state('timers')).to.eql([ 1 ]);
        expect(wrapper.find(Timer)).to.have.length(1);
    });
});
