# vue-assign-model

[![npm version](https://badge.fury.io/js/vue-assign-model.svg)](https://badge.fury.io/js/vue-assign-model)
[![CircleCI](https://circleci.com/gh/midnightSuyama/vue-assign-model.svg?style=shield)](https://circleci.com/gh/midnightSuyama/vue-assign-model)

Automatically assign elements value to model for Vue.js

## Installation

    $ npm install vue-assign-model

## Usage

```javascript
import Vue from 'vue'
import VueAssignModel from 'vue-assign-model'

Vue.use(VueAssignModel)
```

Before Vue rendering, `value`, `checked` or `selected` attributes of elements with `v-model` is automatically assigned to Vue model.

## Example

### Text

```html
<!-- mount elements -->
<input type="text" value="edit me" v-model="text">
```

```javascript
/* assigned model */
data: {
  text: 'edit me'
}
```

### Multiline text

```html
<!-- mount elements -->
<textarea v-model="textarea">add multiple lines</textarea>
```

```javascript
/* assigned model */
data: {
  textarea: 'add multiple lines'
}
```

### Checkbox

```html
<!-- mount elements -->
<input type="checkbox" value="1" v-model="checked" checked>
```

```javascript
/* assigned model */
data: {
  checked: true
}
```

### Multiple checkboxes

```html
<!-- mount elements -->
<input type="checkbox" value="Jack" v-model="checkedNames">
<input type="checkbox" value="John" v-model="checkedNames">
<input type="checkbox" value="Mike" v-model="checkedNames" checked>
```

```javascript
/* assigned model */
data: {
  checkedNames: ["Mike"]
}
```

### Radio

```html
<!-- mount elements -->
<input type="radio" value="One" v-model="picked">
<input type="radio" value="Two" v-model="picked" checked>
```

```javascript
/* assigned model */
data: {
  picked: "Two"
}
```

### Select

```html
<!-- mount elements -->
<select v-model="selected">
  <option value="" disabled>Please select one</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C" selected>C</option>
</select>
```

```javascript
/* assigned model */
data: {
  selected: "C"
}
```

### Multiple select

```html
<!-- mount elements -->
<select v-model="selectedMultiple" multiple>
  <option value="A">A</option>
  <option value="B" selected>B</option>
  <option value="C" selected>C</option>
</select>
```

```javascript
/* assigned model */
data: {
  selectedMultiple: ["B", "C"]
}
```

### Other

JSON of `data-vue-model` is assigned to Vue model.

```html
<!-- mount elements -->
<ul data-vue-model="{&quot;items&quot;: [&quot;Foo&quot;, &quot;Bar&quot;]}">
  <li v-for="item in items">
    {{ item }}
  </li>
</ul>
```

```javascript
/* assigned model */
data: {
  items: ["Foo", "Bar"]
}
```
