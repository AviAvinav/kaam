# Kaam

Kaam is a cli tool for rapidly generating your projects. 

I wanted to create a cli to bootstrap my favorite project templates faster, so I created Kaam for that, but it is free for everyone to use and contribute to.

## Quick Start

Using npm:

```bash
npm i -g kaam

kaam
```

or

using npx:

```bash
npx kaam
```

Answer three simple questions:
- Template you want to use
- Name of your project directory
- Your preferred package manager

That's it, your dependencies are already installed, dive in to your project.

### Alias (optional)

You can also additionally setup an alias to be faster.

These will work only if Kaam is globally installed.

For Windows (Powershell):
```bash
Set-Alias k kaam
```

or For Unix (Bash):
```bash
alias k=kaam
```

## Requirements

- node >= 16.0.0

## How it works:

To make the size smaller the templates folder is not present in the npm package itself. The cli uses [degit](https://github.com/Rich-Harris/degit) to clone the project from the [github repo](https://github.com/AviAvinav/kaam).

## Upcoming Features

- Options to skip questions
- Prettier config generation
- Eslint config generation
- License generation
- Open with code
- Git repo initialize
- Create github repo

## Contributing

Contributing insructions are there in the contributing.md file.

## License

MIT © [Avi Avinav](https://github.com/AviAvinav)
