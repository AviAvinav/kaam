# Contributing

First, let me thank you for taking out your time for trying to contribute to this project.

## Developing

Use the `v1.2.0-alpha` branch for development, make pull requests to this branch.

To develop locally:

1. Fork the repo to your own Github account.
2. Clone the repo to your local machine.
3. Then run one of the following:

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

4. Start the development with `yarn dev #or npm or pnpm`

### For adding features

5. If your feature works then make sure to lint it with `yarn lint #or npm or pnpm`

6. Now make a pull request and wait for it to be reviewed.

### Fixing a bug

5. Open an issue regarding the bug if there isn't one already, and write there that you are working on it.

6. Make sure to lint it with `yarn lint #or npm or pnpm`

7. Now make a pull request and wait for it to be reviewed.

### Adding a template

5. Add your template folder to the templates directory with the name you find suitable.

6. Remove the name field from package.json and delete any eslint config if there.

7. Add your project template to types.ts and main.ts.

8. Make sure to lint it with `yarn lint #or npm or pnpm`

9. Now make a pull request and wait for it to be reviewed.

