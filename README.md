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

You could also run the `buildandrun.sh` shell script that would do that for you by doing `./buildandrun.sh`

PS. You might need to make it executable first. If thats the case you can do `sudo chmod +x buildandrun.sh` 