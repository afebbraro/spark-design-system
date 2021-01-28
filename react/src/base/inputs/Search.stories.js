import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Search',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const searchInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="search-1" isHidden>
      Text Input Label
    </SprkLabel>
    <SprkInput
      id="search-1"
      additionalClasses="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
      type="search"
      placeholder="Search"
    />
  </SprkInputContainer>
);

searchInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidSearchInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="search-2" isHidden>
      Text Input Label
    </SprkLabel>
    <SprkInput
      id="search-2"
      ariaDescribedBy="invalid-search"
      additionalClasses="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
      type="search"
      placeholder="Search"
      isValid={false}
    />
    <SprkFieldError id="invalid-search">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidSearchInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkFieldError',
      'SprkIcon',
    ],
  },
};

export const disabledSearchInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="search-3" isHidden isDisabled>
      Text Input Label
    </SprkLabel>
    <SprkInput
      id="search-3"
      additionalClasses="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
      type="search"
      placeholder="Search"
      isDisabled
    />
  </SprkInputContainer>
);

disabledSearchInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const legacySearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />
);

legacySearchInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidSearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidSearchInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledSearchInput = () => (
  <SprkTextInput
    type="search"
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
    disabled
  />
);

legacyDisabledSearchInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
