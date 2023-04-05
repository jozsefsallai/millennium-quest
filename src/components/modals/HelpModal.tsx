import { useTranslation } from 'next-i18next';
import ModalBase, { ModalProps } from './ModalBase';

const HelpModal = ({ onModalClosed }: ModalProps) => {
  const { t } = useTranslation();

  const movingKeybinds = [
    {
      key: t('help.common.enter'),
      description: t('help.moving-keybinds.command'),
    },
    {
      key: t('help.common.arrow-keys'),
      description: t('help.moving-keybinds.move'),
    },
  ];

  const commandSelectionKeybinds = [
    {
      key: t('help.common.enter'),
      description: t('help.command-selection.accept'),
    },
    {
      key: t('help.common.esc'),
      description: t('help.command-selection.back'),
    },
    {
      key: t('help.common.arrow-keys'),
      description: t('help.command-selection.move'),
    },
  ];

  const movingCommands = [
    'speak',
    'spell',
    'strength',
    'equipment',
    'pool',
    'seek',
    'door',
    'take',
  ];

  const battleCommands = ['attack', 'spell', 'escape', 'equipment'];

  return (
    <ModalBase onModalClosed={onModalClosed}>
      <h2>{t('help.moving-keybinds.title')}</h2>

      {movingKeybinds.map((keybind) => (
        <div key={`moving-${keybind.key}`}>
          <strong>{keybind.key}:</strong>
          <span>{keybind.description}</span>
        </div>
      ))}

      <h2>{t('help.command-selection.title')}</h2>

      {commandSelectionKeybinds.map((keybind) => (
        <div key={`command-selection-${keybind.key}`}>
          <strong>{keybind.key}:</strong>
          <span>{keybind.description}</span>
        </div>
      ))}

      <h2>{t('help.moving-commands.title')}</h2>

      {movingCommands.map((command) => (
        <div key={`moving-commands-${command}`}>
          <strong>{t(`help.moving-commands.${command}.name`)}:</strong>
          <span>{t(`help.moving-commands.${command}.description`)}</span>
        </div>
      ))}

      <h2>{t('help.battle-commands.title')}</h2>

      {battleCommands.map((command) => (
        <div key={`battle-commands-${command}`}>
          <strong>{t(`help.battle-commands.${command}.name`)}:</strong>
          <span>{t(`help.battle-commands.${command}.description`)}</span>
        </div>
      ))}
    </ModalBase>
  );
};

export default HelpModal;
