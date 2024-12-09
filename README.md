# OFAI Research Landscape

You can view the OFAI Research Landscape map here: https://openforumai.github.io/landscape/

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

## Contributing to the project

The OFAI landscape is intended as a map to explore the research and activities related to Open Forum for AI. It includes working group outputs from OFAI members and partner organizations. We also welcome additions of other related research. 

The map is designed to be dynamic, accommodating updates and new entries to reflect the evolving OFAI landscape. The OFAI Landscape Map will be managed through this GitHub repository. We have also provided a form, so that those who are not familiar with GitHub can submit projects for consideration ([OFAI Landscape Form](https://forms.gle/Wb85e8XShwVkk6Hk9).

If you have any issues accessing Google forms, or any additional questions, just email [info@openforumai.org](mailto:info@openforumai.org). 

The OFAI team will review these submissions to ensure they meet the inclusion criteria and maintain the map's integrity.

### Inclusion Criteria

* **Projects by OFAI Members or Fellows**: Only projects created or managed by OFAI members or fellows are automatically eligible for inclusion.  
* **Nominated Projects**: OFAI members or fellows may nominate related projects that align with OFAI’s goals. All nominated projects must receive approval from a designated representative of the project team before being added to the Landscape Map.  
* **Community-Suggested Projects**: Users of the map may propose additional projects for inclusion. These suggestions will be reviewed by OFAI members to determine their relevance and appropriate classification within the landscape.  
* **Open Source AI**: Any technical prototypes listed should adhere to the [OSI Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). 

### Project Details

Each project entry on the OFAI Landscape Map includes the following information:

* **Project Name**: The official name of the project.  
* **Project Logo**: A logo representing the project, which should include the logo of the host institution. Logos must be in SVG format to allow for dynamic scaling.  
* **Project Description**: A brief overview of the project’s goals, activities, and focus areas.  
* **Project Website**: A link to the project’s official website for further information.  
* **Project Tags**: Keywords for additional classification, enhancing searchability and relevance.

More details on how to add projects to the OFAI Landscape Map are included below in the section on Contributing to the OFAI Landscape. 

#### Project Classification

Each project will be classified under one or more OFAI working groups, allowing users to explore projects by their primary area of focus:

* **Research**  
* **Technical Prototypes**  
* **Research and Policy Recommendations Coordination**  
* **Community Engagement and Relationship Building**  
* **Talent for Service**

Working groups are displayed on the left side of the Landscape Map for easy navigation.

#### Project Tags

Projects can also be tagged with one or more specific attributes to provide further insight into their focus areas. Available tags include:

* Data  
* Design & Architecture  
* Code  
* Compute  
* Model Weights  
* Human Feedback  
* Intended vs. Unintended Usage  
* Expertise, Education & Training  
* Oversight

### Adding a project with GitHub

To add a project to the landscape you should:
- Create a local copy of the repository by doing `git clone https://github.com/OpenForumAI/landscape.git` (for example)
- Add the `.svg` project logo to the `logos` directory
- Add the project to the `items` list in the appropriate section in the `data.yml` file
- Open a [pull request](https://github.com/OpenForumAI/landscape/pulls) describing what you've done
