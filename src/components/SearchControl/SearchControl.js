import React from 'react';
import { translate } from 'react-i18next';

import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';

const searchControl = (props) => {
  const { t } = props;
  return (
    <div>
      <Input label={t('search.placeholder')} onChange={props.changed} value={props.text} />
      <Button onClick={props.canceled}>{t('common.btn.clear')}</Button>
    </div>
  );
}

export default translate('translations')(searchControl);
