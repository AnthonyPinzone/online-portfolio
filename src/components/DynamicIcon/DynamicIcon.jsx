import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Memoized component to dynamically load and render icons.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.library - The icon library to load from.
 * @param {string} props.name - The specific icon name within the library to render.
 * @returns {JSX.Element|null} Returns the dynamically loaded icon component or null during loading.
 * @throws {Error} Logs an error if the specified icon or library is not found.
 */
export const DynamicIcon = memo(function DynamicIcon({ library, name }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (library && name) {
      const importIcon = async () => {
        try {
          const iconLibrary = await import('react-icons/' + library);
          setIcons(iconLibrary);
        } catch (error) {
          console.error(`Error importing icon: ${error}`);
        }
      };

      importIcon();
    }
  }, [library, name]);

  if (icons.length === 0) {
    return null;
  }

  if (!icons[name]) {
    return console.error(
      `The "${name}" icon could not be found in the "${library}" library.`,
    );
  }

  const CurrentIcon = icons[name];
  return <CurrentIcon />;
});

DynamicIcon.propTypes = {
  library: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
