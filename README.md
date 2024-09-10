# OFAI Research Landscape

This is a project implemented with the use of https://github.com/cncf/landscape2

To build and run the project locally you need to have the landscape2 CLI [installed](https://github.com/cncf/landscape2?tab=readme-ov-file#installation)

## Running the project locally
First you need to build the project using
```
landscape2 build --data-file data.yml --settings-file settings.yml --guide-file guide.yml --logos-path logos --output-dir build

```

To run the project locally you can use 
```
landscape2 serve --landscape-dir build
```