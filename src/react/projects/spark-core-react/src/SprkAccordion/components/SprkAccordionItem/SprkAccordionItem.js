import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkAccordionItem extends Component {
  constructor(props) {
    super(props);
    const { isDefaultOpen } = this.props;
    this.state = {
      isOpen: isDefaultOpen || false,
      height: isDefaultOpen ? 'auto' : 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0,
    }));
  }

  render() {
    const {
      analyticsString,
      idString,
      children,
      heading,
      headingAddClasses,
      additionalClasses,
      iconAddClasses,
      isDefaultOpen,
      ...other
    } = this.props;
    const { isOpen, height } = this.state;
    const key = uniqueId('accordion-');
    const iconName = 'chevron-up-circle-two-color';
    const iconClasses = classnames(
      'sprk-c-Icon--l sprk-c-Icon--toggle sprk-c-Accordion__icon',
      { 'sprk-c-Icon--open': isOpen },
      iconAddClasses,
    );

    const itemClassNames = classnames(
      'sprk-c-Accordion__item',
      { 'sprk-c-Accordion__item--open': isOpen },
      additionalClasses,
    );

    const headingClassNames = classnames(
      'sprk-c-Accordion__heading',
      'sprk-b-TypeDisplaySeven',
      headingAddClasses,
    );

    return (
      <li className={itemClassNames} key={key} data-id={idString} {...other}>
        <a
          aria-controls={key}
          className="sprk-c-Accordion__summary"
          data-analytics={analyticsString}
          href="#nogo"
          onClick={this.toggle}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <h3 className={headingClassNames}>
            {heading}
          </h3>
          <SprkIcon iconName={iconName} additionalClasses={iconClasses} />
        </a>

        <AnimateHeight duration={300} height={height}>
          <div className="sprk-c-Accordion__content" id={key}>
            {children}
          </div>
        </AnimateHeight>
      </li>
    );
  }
}

SprkAccordionItem.defaultProps = {
  analyticsString: '',
  headingAddClasses: '',
  additionalClasses: '',
  idString: '',
  isDefaultOpen: false,
  iconAddClasses: '',
};

SprkAccordionItem.propTypes = {
  // Content for the item
  children: PropTypes.node.isRequired,
  // Value for the data-analytics attribute on the accordion trigger
  analyticsString: PropTypes.string,
  // The item heading
  heading: PropTypes.string.isRequired,
  // Additional classes for the heading
  headingAddClasses: PropTypes.string,
  // Additional classes for the item
  additionalClasses: PropTypes.string,
  // The data-id value for the accordion item
  idString: PropTypes.string,
  // Used to specify whether the item should be open by default
  isDefaultOpen: PropTypes.bool,
  // Additional classes for the toggle icon
  iconAddClasses: PropTypes.string,
};

export default SprkAccordionItem;
