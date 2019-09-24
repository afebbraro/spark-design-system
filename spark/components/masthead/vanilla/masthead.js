/* global document window */
import getElements from '../../../utilities/helpers/vanilla/getElements';
import { focusFirstEl } from '../../../utilities/helpers/vanilla/elementState';
import { isEscPressed } from '../../../utilities/helpers/vanilla/keypress';
import { hideDropDown, showDropDown } from '../../dropdown/vanilla/dropdown';

const addClassOnScroll = (element, scrollPos, scrollPoint, classToToggle) => {
  // If user scrolls past the scrollPoint then add class
  if (scrollPos >= scrollPoint) {
    element.classList.add(classToToggle);
  } else {
    element.classList.remove(classToToggle);
  }
};

const toggleMobileNav = (iconContainer, nav, masthead) => {
  document.body.classList.toggle('sprk-u-Overflow--hidden');
  // Don't add height: 100% if site's html & body el already have it (reapplying makes page jump)
  document.documentElement.classList.toggle('sprk-u-Overflow--hidden');
  if (document.documentElement.style.height !== '100%') {
    document.documentElement.classList.add('sprk-u-Height--100');
  }
  if (document.body.style.height !== '100%') {
    document.body.classList.add('sprk-u-Height--100');
  }
  masthead.classList.toggle('sprk-c-Masthead--open');
  iconContainer.querySelector('svg').classList.toggle('sprk-c-Menu__icon--open');
  nav.classList.toggle('sprk-u-Display--none');
};

const focusTrap = (isOpen, nav) => {
  if (isOpen) {
    focusFirstEl(nav);
  }
};

const hideMobileNavs = () => {
  document.body.classList.remove('sprk-u-Overflow--hidden');
  document.documentElement.classList.remove('sprk-u-Overflow--hidden');
  document.body.classList.remove('sprk-u-Height--100');
  document.documentElement.classList.remove('sprk-u-Height--100');
  getElements('[data-sprk-mobile-nav]', (item) => {
    item.classList.add('sprk-u-Display--none');
  });
  getElements('.sprk-c-Menu__icon--open', (item) => {
    item.classList.remove('sprk-c-Menu__icon--open');
  });
  getElements('.sprk-c-Masthead--open', (item) => {
    item.classList.remove('sprk-c-Masthead--open');
  });
};

const hideSelectorMask = (mastheadSelectorMask) => {
  mastheadSelectorMask.classList.remove('sprk-c-MastheadMask');
};

const showSelectorMask = (mastheadSelectorMask) => {
  mastheadSelectorMask.classList.add('sprk-c-MastheadMask');
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    const mainLayout = document.querySelector('[data-sprk-main]');
    const masthead = document.querySelector('[data-sprk-masthead]');
    const selectorDropdown = document.querySelector('[data-sprk-dropdown="dropdown-selector"]');
    const selectorTrigger = document.querySelector('[data-sprk-dropdown-trigger="dropdown-selector"]');

    const nav = document.querySelector(
      `[data-sprk-mobile-nav="${element.getAttribute('data-sprk-mobile-nav-trigger')}"]`,
    );

    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, nav, masthead);
    });

    window.addEventListener('scroll', () => {
      addClassOnScroll(masthead, window.scrollY, 10, 'sprk-c-Masthead--scroll');
    });

    mainLayout.addEventListener('focusin', () => {
      const isOpen = !document
        .querySelector('.sprk-c-Masthead__narrow-nav')
        .classList.contains('sprk-u-HideWhenJs');
      focusTrap(isOpen, nav);
    });

    if (selectorTrigger && selectorDropdown) {
      const selectorTriggerInDropdown = document.querySelector('[data-sprk-selector-dropdown-trigger="dropdown-selector"]');
      const wideSelectorDropdown = document.querySelector('[data-sprk-dropdown="dropdown-selector-wide"]');
      const wideSelectorTriggerInDropdown = document.querySelector('[data-sprk-selector-dropdown-trigger="dropdown-selector-wide"]');
      const mastheadSelectorMask = document.querySelector('[data-sprk-masthead-mask]');
      const selectorDropdownChoices = selectorDropdown.querySelectorAll('[data-sprk-dropdown-choice]');

      selectorTrigger.addEventListener('click', () => {
        const dropdownIsOpen = selectorDropdown.classList.contains('sprk-c-Dropdown--open');
        if (dropdownIsOpen) {
          hideSelectorMask(mastheadSelectorMask);
        } else {
          showSelectorMask(mastheadSelectorMask);
        }
      });

      selectorTriggerInDropdown.addEventListener('click', () => {
        const dropdownIsOpen = selectorDropdown.classList.contains('sprk-c-Dropdown--open');
        if (dropdownIsOpen) {
          hideSelectorMask(mastheadSelectorMask);
          hideDropDown(selectorDropdown);
        } else {
          showSelectorMask(mastheadSelectorMask);
          showDropDown(selectorDropdown);
        }
      });

      selectorDropdownChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
          hideSelectorMask(mastheadSelectorMask);
        });
      });

      wideSelectorTriggerInDropdown.addEventListener('click', () => {
        const dropdownIsOpen = wideSelectorDropdown.classList.contains('sprk-c-Dropdown--open');
        if (dropdownIsOpen) {
          hideDropDown(wideSelectorDropdown);
        } else {
          showDropDown(wideSelectorDropdown);
        }
      });

      document.addEventListener('click', (e) => {
        if (!(selectorTrigger.contains(e.target) || selectorDropdown.contains(e.target))) {
          hideSelectorMask(mastheadSelectorMask);
        }
      });

      document.addEventListener('focusin', (e) => {
        /* istanbul ignore else: jsdom cant fire focusin on an element */
        if (!selectorDropdown.contains(e.target)) {
          hideSelectorMask(mastheadSelectorMask);
          hideDropDown(selectorDropdown);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (isEscPressed(e)) {
          hideSelectorMask(mastheadSelectorMask);
        }
      });
    }
  });
};

const masthead = () => {
  window.addEventListener('orientationchange', () => {
    hideMobileNavs();
  });
  bindUIEvents();
};

export {
  masthead,
  toggleMobileNav,
  hideMobileNavs,
  focusTrap,
  bindUIEvents,
  addClassOnScroll,
  hideSelectorMask,
  showSelectorMask,
};