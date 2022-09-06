# React starter workshop

A starter project to learn React from the very basic to advance concepts

# How to start

## Prerequisite

### Install development environment

For Windows user

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

After that, scoop will be accessible via the powershell

```
scoop bucket add main
scoop bucket add extras

scoop install nodejs-lts

scoop install vscode

scoop install git
```

### Manually downloads

If you don't like scoop, which you shouldn't IMO :) you can manually download and install these installer on your own

- VSCode: https://code.visualstudio.com/
- Git: https://git-scm.com/downloads
- NodeJS: 16 LTS

## Clone the repository

```
git clone https://github.com/pvtri96/react-starter

cd react-starter
npm install
```

# Navigating with in the repository

The workshop takes advantages of what git has to offer, by using multiple branches for each section. The unit tests will be provided for each section so that the learner can simply execute the test command to check whether his/her work has already satisfied the section's requirement.

These branches consist of:

- `master`: where the foundation of the workshop are located. You should be able to find every single documentation related to the workshop here.

* `learn/{day_number}/{section}`: is the starting point of a specific section provided by the trainer.
