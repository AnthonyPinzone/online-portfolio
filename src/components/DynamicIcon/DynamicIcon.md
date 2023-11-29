# DynamicIcon React Component

## Overview

The `DynamicIcon` component is designed to dynamically load and render icons from different libraries within the `react-icons` package based on provided props.

### Example Usage:

```jsx
<DynamicIcon library="fa" name="FaReact" />
```

### Props

- `library` (string): The icon library to load from (e.g., "fa", "io").
- `name` (string): The specific icon name within the library to render.

### Returns

- Returns the dynamically loaded icon component or null during loading.

### Error Handling

- Logs an error if the specified icon or library is not found.

### Implementation Details

- The component utilizes memoization to prevent unnecessary re-renders and optimizes performance.

### Code Comments

```js
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
  // Setup an "icons" state to store all the icons from the requested library
  const [icons, setIcons] = useState([]);

  // Only make the import request if both props were provided.
  // Fetch the icon library using the provided library name.
  // Store the array of icons in the state if successful.
  // Throw an error if the request to the icon library fails.
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

  // Since we are waiting on an async call to get the icon library,
  // we need to account for the time it takes to make that call.
  // You can do that here with a loading message, a loading spinner,
  // or just wait for the re-render like we're doing here by returning null.
  if (icons.length === 0) return null;

  // Account for somebody passing in an icon that doesn't exist in the library.
  // Use a return statement to short circuit the component.
  // I'm using a console.error since its a quieter error format, you could throw
  // an error or setup custom error handling for this instead.
  if (!icons[name]) {
    return console.error(
      `The "${name}" icon could not be found in the "${library}" library.`,
    );
  }

  // If everything checks out, create a new component equal to
  // the key[value] pair found in the library and return it.
  const CurrentIcon = icons[name];
  return <CurrentIcon />;
});

// PropTypes define the expected type of the component properties.
// It also identifies which properties are required.
DynamicIcon.propTypes = {
  library: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
```
