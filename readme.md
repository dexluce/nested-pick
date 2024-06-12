# nested-pick

`nested-pick` is a utility function for deeply picking properties from objects, allowing developers to extract specific parts of an object by specifying the desired structure.

## Installation

To install `nested-pick`, run the following command in your project directory:

```bash
npm install nested-pick
```

## Usage

Import `nested-pick` into your project and use it to extract properties from objects:

```javascript
import { nestedPick } from 'nested-pick';

const object = {
  user: {
    id: 1,
    name: {
      first: 'John',
      last: 'Doe'
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '123-456-7890'
    }
  }
};

const result = nestedPick(object, ['user.name.first, user.contact.email']);
console.log(result);
// Output: { user: { name: { first: 'John' }, contact: { email: 'john.doe@example.com' } } }
```

## API Details

`nestedPick(object, paths)`

- **object** - The source object from which to pick properties.
- **paths** - A single path or an array of paths specifying the properties to be picked. Paths can be simple like `'a'`, nested like `'user.name.first'`, or array-based like `'user.posts[0].title'`.

## Features

- **Deep Picking**: Recursively select properties from nested objects.
- **Flexible Queries**: Use a simple, readable syntax to specify which properties to extract.

## Testing

The package comes with a comprehensive suite of tests to ensure the functionality and robustness of `nested-pick`. To run the tests, navigate to the root of your project directory and execute:

```bash
npm test
```

This will run the tests defined in your project, allowing you to verify that your implementations of `nested-pick` meet the required specifications before deploying or integrating into your application.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please fork the repository and submit your pull requests. We appreciate contributions in the form of bug fixes, additional features, or improvements to the documentation.

## License

`nested-pick` is ISC licensed.
