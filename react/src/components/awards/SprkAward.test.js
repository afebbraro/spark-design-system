/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAward from './SprkAward';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkAward:', () => {
  it('should display a SprkAward with the correct base class', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);
    expect(wrapper.find('div.sprk-o-Stack.sprk-o-CenteredColumn.sprk-o-Stack--medium').length).toBe(1);
  });

  it('should display the award component with the images section', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        element: 'a',
      },
      {
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
        element: 'span',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);
    expect(wrapper.find('img').length).toBe(2);
  });

  it('should add the correct split class', () => {
    const images = [
      {
        to: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        element: undefined,
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} splitAt="large" />);
    expect(wrapper.find('div.sprk-o-Stack--medium.sprk-o-Stack__item--center-column').hasClass('sprk-o-Stack--split@l')).toBe(true);
  });

  it('should add the correct item spacing class', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} itemSpacing="large" />);
    expect(wrapper.find('.sprk-o-Stack--large').length).toBe(2);
  });
});
