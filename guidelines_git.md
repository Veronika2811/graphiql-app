# graphiql-app

## How to install

``` shell
npm install
```

## How to run application

``` shell
npm start
```

The application will boot op on http://localhost:3000.

## Build application

``` shell
npm run build
```

This will create a dist folder with compiled and minimized components.

## Git Rules

Below are some guidelines for naming branches and commits in a Git repository, specifically for branches with species names.

### Branches

#### Use a prefix to indicate the type of branch

- `feature/` — for new features being added to the project.
- `bugfix/` — for fixing bugs or issues in the code.
- `hotfix/` — for critical bug fixes that need to be addressed immediately.
- `release/` — for preparing a new release of the project.
- `experiment/` — for experimental features that may not be included in the main codebase.
- `refactor/` — for to change the project structure, code formatting. Doesn't add new functionality / doesn't change behavior.
- `docs/` — for working with project documentation/readme.

#### Include a reference number or identifier to the branch's name

1. Include a reference number or identifier after the prefix to tie the branch to a specific issue or task.
2. You should start all the reference numbers or identifiers with `GQ-` and use uppercase letters and hyphens to separate words.
3. Include a short task title.

Branch name format: `{type}/GQ-{issue number}/{short task title}`.

**Examples**: `docs/GQ-1/guidelines-git`, `feature/GQ-2/config`.

### Commits

#### One Commit. One Change.

Before creating a PR, you should have only one commit in a branch. You have two ways to achieve a single commit:

1. All subsequent commits must update the first commit:
```git commit --amend --no-edit```

This way, your branch will only have 1 commit, making it easier to merge branches later on.

2. Before creating a PR, do a `git squash` to squash all the commits into one.

#### Commit message

1. Commits are written only in English.

2. Use a prefix to indicate the type of commit

- `feat:` — for new features being added to the project.
- `fix:` — for to fix a bug in previously implemented functionality.
- `refactor:` — for to change the project structure, code formatting. Doesn't add new functionality / doesn't change behavior.
- `docs:` — for working with project documentation/readme.

3. Use a concise and descriptive commit message:
    - Begin with a short summary of the changes made in the commit.
    - Use the imperative mood and present tense to describe the changes.
    - Be specific about what was changed, and why.

4. Include a reference to the issue or task being addressed at the end:
    - Use the issue or task identifier in the commit message to tie the commit to a specific issue or task at the end. Example: `#41`
    - Use uppercase letters and hyphens to separate words.

Commit message format: `{type}: {commit message} #{issue number}`.

**Examples**: `docs: add guidelines for using git #1`

4. Keep commits focused and atomic:
    - Make each commit focused on a specific change or set of changes.
    - Avoid committing unrelated changes together in a single commit.
    - If a change spans multiple commits, use descriptive commit messages to tie them together.