import Ember from 'ember';

/*
---
name: Button
category: CSS
---

Options
-------
Use any of the available button types to quickly create a styled button.

```types.handlebars
<!-- Standard button -->
{{#bs-button type="default"}}Default{{/bs-button}}

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
{{#bs-button type="primary"}}Primary{{/bs-button}}

<!-- Indicates a successful or positive action -->
{{#bs-button type="success"}}Success{{/bs-button}}

<!-- Contextual button for informational alert messages -->
{{#bs-button type="info"}}Info{{/bs-button}}

<!-- Indicates caution should be taken with this action -->
{{#bs-button type="warning"}}Warning{{/bs-button}}

<!-- Indicates a dangerous or potentially negative action -->
{{#bs-button type="danger"}}Danger{{/bs-button}}

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
{{#bs-button type="link"}}Link{{/bs-button}}
```

<warning>
#### Conveying meaning to assistive technologies
Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (the visible text of the button), or is included through alternative means, such as additional text hidden with the `.sr-only` class.
</warning>

Sizes
-----
Fancy larger or smaller buttons? Add `size="lg"`, `size="sm"`, or `size="xs"` for additional sizes.

```sizes.handlebars
<p>
  {{#bs-button type="primary" size="lg"}}Large button{{/bs-button}}
  {{#bs-button type="default" size="lg"}}Large button{{/bs-button}}
</p>
<p>
  {{#bs-button type="primary"}}Default button{{/bs-button}}
  {{#bs-button type="default"}}Default button{{/bs-button}}
</p>
<p>
  {{#bs-button type="primary" size="sm"}}Small button{{/bs-button}}
  {{#bs-button type="default" size="sm"}}Small button{{/bs-button}}
</p>
<p>
  {{#bs-button type="primary" size="xs"}}Extra small button{{/bs-button}}
  {{#bs-button type="default" size="xs"}}Extra small button{{/bs-button}}
</p>
```

Custom
------
```custom.hbs
{{#bs-button type=type size="lg"}}Click me{{/bs-button}}
```
```custom.js
{
	type: "primary"
}
```
```custom.css
div {
  padding: 20px;
  background: #cfc;
}
```
*/
export default Ember.Component.extend({
  type: 'default',
	actions: {
		click: () => alert('You clicked the button!')
	}
});
