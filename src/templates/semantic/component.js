export default {
  form: `
<div id="{{id}}" class="field {{classes}}"{% if (styles) { %} styles="{{styles}}"{% } %} ref="component">
  {% if (visible) { %}
  {{children}}
  <div ref="messageContainer"></div>
  {% } %}
</div>
`,
};