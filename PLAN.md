Monorepo with lerna:

## @clarityhub/harmony-cli

Contains commander commands for creating harmony projects. Usually defers to
@clarityhub/generator-harmony and yeoman.

```bash
harmony create "My App" ./my-app
```

## @clarityhub/generator-harmony

A set of yeoman generators for creating projects, files, migrations, and more.

```bash
harmony create # alias of yo @clarityhub/harmony server
harmony make:migration create-issue-table # alias of yo @clarityhub/harmony migration
```

## @clarityhub/harmony-server

The Harmony Server framework used when creating a harmony project. This has
scripts that are used by default to run the server, migrations, etc.

## @clarityhub/harmony-sequelize-provider

A set of Sequelize providers to use with Harmony Server.
