The application is using the Python programming language.

Linting is usually done with the Pylint program, which checks for linting errors based on the configuration stored in the .pylintrc file stored in the project root.

Testing is done in Python usually with the Pytest testing framework. The framework can run all available tests at the same time, and gives a nice review of the results at the end. A tool like 'coverage' can be used to check for tested branch coverage of the codebase.

You can build a Python program into a project package by using a build tool such as 'build'. You can also use Poetry packet manager to handle all project dependencies, which will allow you to use its build-command to create the finished package. Python projects can also be made into independently runnable executables with tools such as auto-py-to-exe for Windows.

To set up a CI pipeline for the project, one can use tools such as Buddy, CircleCI or Jetbrains' TeamCity. These tools are all free but come with paid options as well. There are also completely free open-source versions available, e.g. Buildbot, Cruise Control. Some of the tools are web based, and others require installation.

For a small project releasing soon, a cloud-based environment is probably better suited, since this will allow for faster onboarding of use since there is no required independent server setup overhead or costs. Since the team is also fairly small, it probably does not need the added configurability of self-hosted environments. As a side not, the self-hosted option might still make sense if the project deals with particularly sensitive secrets that cannot be divulged to any third parties.
