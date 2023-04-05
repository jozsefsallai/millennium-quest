import { useTranslation } from 'next-i18next';
import ModalBase, { ModalProps } from './ModalBase';

const LICENSES = `UniRx The MIT License (MIT) Copyright (c) 2018 Yoshifumi Kawai
Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
""Software""), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions: The above copyright notice and this permission
notice shall be included in all copies or substantial portions of the
Software. THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
--------------------------------------
UniTask The MIT License (MIT)
Copyright (c) 2019 Yoshifumi Kawai / Cysharp, Inc. Permission is hereby
granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the ""Software""), to deal in the
Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: The above
copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED
""AS IS"", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`;

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

      <h2>{t('readme.archive.title')}</h2>
      <p>{t('readme.archive.description')}</p>
      <p>{t('copyright-notice')}</p>

      <h2>{t('readme.licenses.title')}</h2>

      <div>
        {LICENSES.split('\n').map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </div>
    </ModalBase>
  );
};

export default ReadmeModal;
