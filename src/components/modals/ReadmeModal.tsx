import { useTranslation } from 'next-i18next';
import ModalBase, { ModalProps } from './ModalBase';

const ReadmeModal = ({ onModalClosed }: ModalProps) => {
  const { t } = useTranslation();

  return (
    <ModalBase onModalClosed={onModalClosed}>
      <h2>{t('readme.notice.title')}</h2>

      <p>{t('readme.notice.notice-1')}</p>
      <p>{t('readme.notice.notice-2')}</p>

      <h2>{t('readme.deprecated-os.title')}</h2>
      <p>{t('readme.deprecated-os.description')}</p>
      <p>{t('readme.deprecated-os.os-1')}</p>
      <p>{t('readme.deprecated-os.os-2')}</p>
    </ModalBase>
  );
};

export default ReadmeModal;
