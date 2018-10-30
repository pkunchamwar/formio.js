import baseEditForm from '../base/Base.form';

import Custom1EditDisplay from './editForm/Custom1.edit.display';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      ignore: true
    },
    {
      key: 'api',
      ignore: true
    },
    {
      key: 'validation',
      ignore: true
    },
    {
      key: 'data',
      ignore: true
    },
    {
      key: 'conditional',
      ignore: true
    },
    {
      key: 'logic',
      ignore: true
    },
  ],
  [
    {
      key: 'tabs',
      label:'Custom Properties',
      components: Custom1EditDisplay
    }
  ],
  ...extend);
}
