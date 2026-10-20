# Contributing to nicolasghiggi.dev

Thanks for your interest in contributing! This repository contains the source
code of my personal website. Bug reports, typo fixes, accessibility
improvements, and suggestions are all welcome.

By participating, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

* **Report a bug**: open an issue using the *Bug report* template.
* **Suggest an improvement**: open an issue using the *Feature request* template.
* **Fix something**: submit a pull request (see below).
* **Report a security issue**: do **not** open a public issue; follow the
  [Security Policy](SECURITY.md) instead.

## Before you start

* Search [existing issues](../../issues) and [pull requests](../../pulls) to
  avoid duplicates.
* For anything larger than a small fix, please open an issue first so we can
  discuss the approach before you invest time in it.
* Note that this is a personal website: content (texts, projects, personal
  information, images) is not open to modification via pull requests, while
  code, styling, accessibility, performance, and documentation are.

## Development workflow

1. **Fork** the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/nicolasghiggi.dev.git
   cd nicolasghiggi.dev
   ```
2. **Install dependencies** and start the dev server, following the
   instructions in the [README](README.md).
3. **Create a branch** from `main` with a descriptive name:
   ```bash
   git checkout -b fix/navbar-contrast
   ```
   Suggested prefixes: `feat/`, `fix/`, `docs/`, `refactor/`, `chore/`.
4. **Make your changes**, keeping them focused. One pull request should address
   one concern.
5. **Run the linter, formatter, and build** (if available) and make sure
   everything passes before pushing.
6. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   fix: improve navbar contrast in dark mode
   feat: add reduced-motion support to hero animation
   docs: clarify local setup steps
   ```
7. **Push** your branch and open a pull request against `main`, filling in the
   pull request template.

## Pull request guidelines

* Keep the diff small and focused.
* Describe *what* changed and *why*.
* Include screenshots or recordings for any visual change (before/after).
* Make sure the site remains responsive, accessible (keyboard navigation,
  contrast, semantic HTML), and performant.
* Update documentation when behavior or setup changes.
* Be open to feedback; reviews are meant to improve the change, not to criticize.

## Style guidelines

* Follow the existing code style and project structure.
* Use the project's configured linter and formatter rather than reformatting
  unrelated code.
* Prefer clear naming and small, readable components/functions.
* Write comments only where the intent isn't obvious from the code.

## Reporting bugs

A good bug report includes:

* A clear, descriptive title
* Steps to reproduce
* Expected vs. actual behavior
* Browser/OS/device information
* Screenshots or console output, where relevant

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE).
