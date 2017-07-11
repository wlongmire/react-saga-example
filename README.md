This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is organized by feature and follows an interpretation of [Jack Hsu's Three Rules](https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/).

The project repo follows the git-flow branching model. Instructions can be found [here](https://github.com/nvie/gitflow#initialization).

Clone the repository. Then, run:

```
yarn install
yarn start
```

For git flow [Installation Instructions](https://github.com/nvie/gitflow/wiki/Installation).

Once you have git flow installed:

To create a feature branch:

```
git flow feature start <name> [<base>]
```

For feature branches, the `<base>` arg must be a commit on `develop`.

To finish a feature branch:

```
git flow feature finish <name>
```

To push/pull a feature branch to the remote repository, use:
```
git flow feature publish <name>
git flow feature pull <remote> <name>
```