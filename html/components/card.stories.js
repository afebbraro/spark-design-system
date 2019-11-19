export default {
  title: 'Components/Card',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/card)
    `,
  },
};

export const defaultStory = () => (
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="default-card"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack
          sprk-o-Stack--large
        "
        >
      </div>
    </div>
  `
);

defaultStory.story = {
  name: 'Default',
};

export const standoutCard = () => (
  `
    <div
      class="
        sprk-c-Card
        sprk-c-Card--standout
        sprk-o-Stack
      "
      data-id="standout"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--medium
        "
      >
      </div>
    </div>
  `
);

standoutCard.story = {
  name: 'Standout',
};

export const highlightedHeader = () => (
  `
    <div
      class="sprk-c-Card sprk-c-Card--standout sprk-o-Stack"
      data-id="highlighted-header"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__header
          sprk-o-Stack
          sprk-o-Stack--medium
        "
      >
        <h3
          class="
            sprk-b-TypeDisplaySeven
            sprk-o-Stack__item
            sprk-u-Color--white
          "
        >
          Description
        </h3>

        <h4
          class="
            sprk-b-TypeDisplayFive sprk-o-Stack__item
            sprk-u-Color--white
          "
        >
          Card Title
        </h4>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack sprk-o-Stack--medium
          sprk-c-Card__content
        "
      >
        <p
          class="sprk-b-TypeBodyTwo sprk-o-Stack__item"
        >
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </div>
    </div>
  `
);

highlightedHeader.story = {
  name: 'Highlighted Header',
};

export const teaserCard = () => (
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="teaser-card"
    >
      <a href="#" class="sprk-o-Stack__item">
        <img
          class="sprk-c-Card__media"
          alt="Spark placeholder image."
          src="https://spark-assets.netlify.com/desktop.jpg"
        >
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--large
        "
      >
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
          Title
        </h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet,
          doctus invenire vix te.
          Facilisi perpetua an pri,
          errem commune mea at, mei
          prima tantas signiferumque at. Numquam.
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#" class="sprk-c-Button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  `
);

teaserCard.story = {
  name: 'Teaser',
};

export const teaserWithDiffElOrder = () => (
  `
    <div
      class="sprk-c-Card sprk-o-Stack"
      data-id="teaser-diff-order"
    >
      <h3
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-b-TypeDisplayFive
          "
        >
        Title
      </h3>

      <a href="#" class="sprk-o-Stack__item">
        <img
          alt="Spark placeholder image"
          src="https://spark-assets.netlify.com/desktop.jpg" />
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack
          sprk-o-Stack--large
        "
      >
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet, doctus invenire
          vix te. Facilisi perpetua an pri, errem commune
          mea at, mei prima tantas signiferumque at. Numquam.
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#" class="sprk-c-Button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  `
);

teaserWithDiffElOrder.story = {
  name: 'Teaser With Different Element Order',
};

export const twoUpCards = () => (
  `
    <div
      class="
        sprk-o-Stack
        sprk-o-Stack--large
        sprk-o-Stack--split@l
      "
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="two-up-card-1"
      >
        <a
          href="#"
          class="sprk-o-Stack__item"
        >
          <img
            class="sprk-c-Card__media"
            alt="Spark placeholder image."
            src="https://spark-assets.netlify.com/desktop.jpg"
          >
        </a>

        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
          >
          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua an pri,
            errem communemea at, mei prima
            tantas signiferumque at. Numquam.
          </p>

          <a
            href="#"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--simple
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
    </div>

    <div
      class="
        sprk-o-Stack__item
        sprk-o-Stack__item--flex@l
        sprk-c-Card sprk-o-Stack
      "
      data-id="two-up-card-2"
    >
      <a href="#" class="sprk-o-Stack__item">
        <img
          class="sprk-c-Card__media"
          alt="Spark placeholder image."
          src="https://spark-assets.netlify.com/desktop.jpg">
      </a>

      <div
        class="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack sprk-o-Stack--large
        "
      >
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
          Title
        </h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          Lorem ipsum dolor sit amet,
          doctus invenirevix te.
          Facilisi perpetua an pri, errem
          communemea at, mei prima tantas
          signiferumque at.
          Numquam.
        </p>

        <a
          href="#"
          class="
            sprk-o-Stack__item
            sprk-b-Link
            sprk-b-Link--simple
            sprk-b-Link--has-icon
          "
        >
          Learn More
          <svg class="sprk-c-Icon" viewBox="0 0 64 64">
            <use xlink:href="#chevron-right" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  `
);

twoUpCards.story = {
  name: 'Card Layout - Two Up',
};

export const threeUpCards = () => (
  `
    <div class="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-three-up-1"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a href="#" class="sprk-u-AbsoluteCenter sprk-o-Stack__item">
            <svg
              class="
                sprk-c-Icon
                sprk-c-Icon--xxl
              "
              height="75"
              viewBox="0 0 220.63 197.62"
            >
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3
            class="
              sprk-b-TypeDisplayFive
              sprk-o-Stack__item
            "
          >
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te.
            Facilisi perpetua an pri,
            errem communemea at, mei
            prima tantas signiferumque at.
          </p>

          <a
            href="#"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--simple
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-three-up-2"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a href="#" class="sprk-u-AbsoluteCenter sprk-o-Stack__item">
            <svg
              class="sprk-c-Icon sprk-c-Icon--xxl"
              height="75"
              viewBox="0 0 220.63 197.62"
            >
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua an
            pri, errem communemea at, mei prima
            tantas signiferumque at.
          </p>

          <a
            href="#"
            class="
              sprk-o-Stack__item
              sprk-b-Link sprk-b-Link--simple
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@l
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-three-up-3"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-u-TextAlign--center
          "
        >
          <a
            href="#"
            class="sprk-u-AbsoluteCenter sprk-o-Stack__item">
            <svg
              class="sprk-c-Icon sprk-c-Icon--xxl"
              height="75" viewBox="0 0 220.63 197.62">
              <use xlink:href="#call-team-member" />
            </svg>
          </a>

          <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            Icon Title
          </h3>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit
            amet, doctus invenirevix te.
            Facilisi perpetua an pri,
            errem communemea at, mei
            prima tantas signiferumque at.
          </p>

          <a href="#"
            class="
              sprk-o-Stack__item
              sprk-b-Link
              sprk-b-Link--simple
              sprk-b-Link--has-icon
            "
          >
            Learn More
            <svg class="sprk-c-Icon" viewBox="0 0 64 64">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `
);

threeUpCards.story = {
  name: 'Card Layout - Three Up',
};

export const fourUpCards = () => (
  `
    <div
      class="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@xl"
    >
      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-1"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit
            amet, doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card sprk-o-Stack
        "
        data-id="card-four-up-2"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-3"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xl
          sprk-c-Card
          sprk-o-Stack
        "
        data-id="card-four-up-4"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-c-Card__content
            sprk-o-Stack
            sprk-o-Stack--large
          "
        >
          <h4 class="sprk-b-TypeDisplaySix sprk-o-Stack__item">
            Card Title
          </h4>

          <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            Lorem ipsum dolor sit amet,
            doctus invenirevix te. Facilisi perpetua.
          </p>

          <div class="sprk-o-Stack__item">
            <a href="#" class="sprk-c-Button">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  `
);

fourUpCards.story = {
  name: 'Card Layout - Four Up',
};
