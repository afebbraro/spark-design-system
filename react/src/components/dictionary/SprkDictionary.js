import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkDictionary = (props) => {
  const {
    keyValuePairs,
    variant,
    idString,
    additionalClasses,
    ...other
  } = props;

  const classNames = classnames(
    'sprk-c-Dictionary',
    additionalClasses, {
      'sprk-c-Dictionary--striped': variant === 'striped',
    },
  );

  const keyValuePairsMap = Object.keys(keyValuePairs).map(term => (
    <div className="sprk-c-Dictionary__keyvaluepair" key={uniqueId('key-')}>
      <dt className="sprk-c-Dictionary__key sprk-b-Label sprk-b-Label--no-input">{term}</dt>
      <dd className="sprk-c-Dictionary__value">{keyValuePairs[term]}</dd>
    </div>
  ));

  return (
    <div className={classNames} data-id={idString} {...other}>
      <dl className="sprk-c-Dictionary__keyvaluepairs">
        {keyValuePairsMap}
      </dl>
    </div>
  );
};

SprkDictionary.defaultProps = {
  variant: '',
  idString: '',
  additionalClasses: '',
};

SprkDictionary.propTypes = {
  /**
   * The collection of key-value pairs
   * to render.
   */
  keyValuePairs: PropTypes.PropTypes.shape({
    '': '',
  }).isRequired,
  /**
   * Determines the style of dictionary component.
   * Supplying no value will cause the base styles to be used.
   */
  variant: PropTypes.oneOf(['striped']),
  /**
   * Value assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * Dictionary Component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkDictionary;
