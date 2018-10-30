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
    }
  ], [
    {
      key: 'custom',
      components: Custom1EditDisplay
    },
  ]);
}
