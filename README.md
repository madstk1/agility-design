# Agility Design
Agility Design is a mobile-first HTML, CSS, and JavaScript framework to create themed websites. While it is influenced by Bootstrap 4 and Foundation, it also combines different aspects into a more uniform framework.

## Getting Started

To start using AD, simply link the `.css`-file to your `.html`-file.

```
<link rel="stylesheet" href="https://raw.githubusercontent.com/madstk1/agility-design/master/css/simplicity-design.min.css">
```
  
To add a skin, link the skin-in-questions's `.css`-file to your `.html`-file, as well.

```
<link rel="stylesheet" href="https://raw.githubusercontent.com/madstk1/agility-design/master/css/skins/default.css">
```

## Building

It is also possbile to build your own version of AD, if you so desire.

### Prerequisites

To build AD, you have to have `Less` and `Clean-CSS` installed via `npm`. If not already installed, run the following command:

```
# npm install -g less less-plugin-clean-css
```

### With Clean-CSS optimization

To compress the entire library into a single `.css`-file, run the included `build.sh` script:

```
$ ./build.sh
```

### Without Clean-CSS optimization

If you do not want to use the Clean-CSS library, building will still be possible, but with a potential performance penalty. To build without Clean-CSS, run the following command inside the root of the project.

```
$ lessc less/agility-design.less css/agility-design.min.css
```

## Usage

For examples and how to use Agility Design, check the wiki pages in this GitHub project. Examples can also be found in the [examples/](https://github.com/madstk1/agility-design/tree/master/examples)-folder
