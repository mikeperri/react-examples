import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Timer from '.';

describe('<Timer />', () => {
    it('has "Start", "Pause", and "Reset" buttons', () => {
        const wrapper = shallow(<Timer />);
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start').length).to.equal(1);
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Pause').length).to.equal(1);
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Reset').length).to.equal(1);
    });

    it('has the "Start" button enabled and the "Pause" and "Reset" buttons disabled initially', () => {
        const wrapper = shallow(<Timer />);
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start')).to.not.be.disabled();
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Pause')).to.be.disabled();
        expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Reset')).to.be.disabled();
    });

    describe('after the Start button is clicked', () => {
        let wrapper, clock;

        beforeEach(() => {
            wrapper = mount(<Timer />);
            clock = sinon.useFakeTimers();
            wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start').simulate('click');
        });

        afterEach(() => {
            clock.restore();
        });

        it('disables the "Start" button and enables the "Pause" and "Reset" buttons', () => {
            expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start')).to.be.disabled();
            expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Pause')).to.not.be.disabled();
            expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Reset')).to.not.be.disabled();
        });

        it('displays seconds elapsed', () => {
            expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;

            // After .5 seconds elapsed
            clock.tick(500);
            expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;

            // After 1 second elapsed
            clock.tick(500);
            expect(wrapper.contains(<span>1 second</span>)).to.be.true;

            // After 2 seconds elapsed
            clock.tick(1000);
            expect(wrapper.contains(<span>2 seconds</span>)).to.be.true;
        });

        it('resets the timer when the "Reset" button is clicked', () => {
            clock.tick(2000);

            wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Reset').simulate('click');
            expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;
            clock.tick(12345);
            expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;
        });

        describe('after the "Pause" button is clicked', () => {
            beforeEach(() => {
                clock.tick(2000);
                wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Pause').simulate('click');
            });
            it('disables the "Pause" button and enables the "Start" button', () => {
                expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Pause')).to.be.disabled();
                expect(wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start')).to.not.be.disabled();
            });
            it('pauses the count and resumes when "Start" is clicked again', () => {
                clock.tick(12345);
                expect(wrapper.contains(<span>2 seconds</span>)).to.be.true;
                wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Start').simulate('click');
                expect(wrapper.contains(<span>2 seconds</span>)).to.be.true;
                clock.tick(1000);
                expect(wrapper.contains(<span>3 seconds</span>)).to.be.true;
            });

            it('resets the timer when the "Reset" button is clicked', () => {
                wrapper.findWhere(n => n.type() === 'button' && n.text() === 'Reset').simulate('click');
                expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;
                clock.tick(12345);
                expect(wrapper.contains(<span>0 seconds</span>)).to.be.true;
            });
        });
    });
});
