# wsdl-to-ts-svc

<a href="https://www.npmjs.com/package/wsdl-to-ts-svc">
    <img src="https://img.shields.io/npm/v/wsdl-to-ts-svc.svg"
         alt="npm version" />
</a>
<a href="https://github.com/DejayJD/wsdl-to-ts-svc/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/wsdl-to-ts-svc.svg"
         alt="license" />
</a>

This project is a fork of `wsdl-to-ts`, however I wanted to go a step
beyond just generating interface files, but also generate an Angular friendly service.
A CLI tool and library for nodejs to generate TypeScript typings.

## Installation
Installation is only through [npm](https://npmjs.com).

To install CLI tool globally run one of the following command as root or sudo:
```sh
$ npm install -g wsdl-to-ts-svc
```

To install CLI tool for the current user one of these commands may be used (which places working directory at users `$HOME`):
```sh
$ cd && npm install wsdl-to-ts-svc
```

## Issues

Feel free to add any [issues](https://github.com/DejayJD/wsdl-to-ts-svc/issues).

### Usage

Check version:
```sh
$ wsdl-to-ts-svc --version
```

Generate typings and service layers for a WSDL located (multiple may be done at the same time by listing more on the command line):
```sh
$ cd /tmp
$ wsdl-to-ts-svc "https://www.w3schools.com/xml/tempconvert.asmx?WSDL"
```

The output directory may be changed to any directory using the `--outdir` flag.
```sh
$ wsdl-to-ts-svc --outdir="./some/other/dir" "https://www.w3schools.com/xml/tempconvert.asmx?WSDL"
```

#### CLI flags
* `--version` - Display which version you are currently executing.
* `--outdir=SOME/DIR/PATH` - Sets the path which will contain the type definitions.
* `--tslint=RULE0,RULE1,RULE2` - Enable specified rules in all generated files.
* `--tslint=false` - Disables tslint in all generated files.
* `--tslint-disable=RULE0,RULE1,RULE2` - Disable specified rules in all generated files.
