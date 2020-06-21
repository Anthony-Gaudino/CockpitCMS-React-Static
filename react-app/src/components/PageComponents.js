import React from "react";
//
const imports = [
  'Heading',
  'Text',
  'Divider',
  'CustomImage',
  'BigHero',
  'PageBanner',
  'SectionDivider',
  'LeafletMap',
  'Grid',
  'BlogPosts',
  'PageBannerMedia',
  'CodeBlock',
  'Form',
  'Video',
  'SubPages',
  'Button',
  'CustomCarousel',
  'Card',
];

const defaultComponents = {};

// Dynamically import components to resolve circular dependency problems.
import("./cockpit").then(m => {
	for (const i of imports) {
		defaultComponents[i.toLowerCase()] = m[i];
	}
});

export default ({ components }) => (
  <div className="page--components">
    {components &&
      components.map((component_parsed, idx) => {
        const name = component_parsed.component.toLowerCase();
        const settings = component_parsed.settings;
        const columns = component_parsed.columns || [];

        if (defaultComponents[name] === undefined) {
          return null;
        }

        const Component = defaultComponents[name];

        return (
          <Component
            name={name}
            {...settings}
            columns={columns}
            key={`component-${idx}`}
          />
        );
      })}
  </div>
);
