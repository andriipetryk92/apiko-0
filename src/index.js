const tags = ['DIV', 'SPAN', 'P', 'BR'];

function createElement(elementTag, props = {}, value) {
  const element = document.createElement(elementTag);
  const validTag = tags.includes(element.tagName);
  if (validTag && props) {
    for (let title in props) {
      if (typeof props[title] === 'object') {
        for (let key in props[title]) {
          element[title][key] = props[title][key];
        }
      } else {
        element[title] = props[title];
      }
    }
  }

  if (validTag && value) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        element.append(value[i]);
      }
      return element;
    }
    element.append(value);
  } else if (!validTag && elementTag) {
    console.log('Not valid ' + elementTag);
  }
  return element;
}

function render(element, wrapper) {
  wrapper.append(element);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' }, className: 'addedClass' },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', {
      textContent: 'Text content',
      id: 'addedId',
    }),
    React.createElement('newElement'),
  ],
);

React.render(app, document.getElementById('app'));
