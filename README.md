<p align="center"><img src="https://user-images.githubusercontent.com/2771377/58760372-12260100-854c-11e9-8756-4b4d9ad61154.png" data-canonical-src="https://user-images.githubusercontent.com/2771377/58760372-12260100-854c-11e9-8756-4b4d9ad61154.png" width="150" height="150" /></p>

# Me _(My JSON resume with graphical interface)_

**Me** is an application which processes a JSON file with a specified schema and will generate a printer-friendly webpage as a result.

![Screenshot of Me](https://user-images.githubusercontent.com/2771377/58752355-b9f6ec80-84c2-11e9-8c51-24880e5278c6.PNG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Installing Node.js](https://nodejs.org)
- [Installing Yarn](https://yarnpkg.com/en/)
- Having a [basic knowledge of JSON](https://www.w3schools.com/whatis/whatis_json.asp)

### Installing

1. Make a fork from [this repository](https://github.com/Alireza29675/Me).

2. Clone your fork using following command:

    ```bash
    git clone [YOUR-FORK-URL]
    ```

3. Go to **Me** directory and install dependencies:

    ```bash
    cd ./Me
    yarn install
    ```

4. Modify your resume file which is located at `src/data/resume.json`

5. Build your PDF resume in `/build/` directory

    ```bash
    yarn run build
    ```


## Running the tests

- Make sure you've installed **Me** step by step
- Run following command to test if the app works properly:
    ```bash
    yarn test
    ```

## Deployment

- 

## Built With

* [Node.js](https://Nodejs.org) - Javascript Engine
* [Create React App](https://facebook.github.io/create-react-app/) - React App Generator
* [Yarn](https://yarnpkg.com) - Dependency Management
* [SASS](https://sass-lang.com/) - CSS Preprocessor
* [FontAwesome](https://fontawesome.com/) - Font Icons
* [PurpleBooth's README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - README Template

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Alireza29675/Me/tags). 

## Authors

* **Alireza Sheikholmolouki** - *Initial work* - [Alireza29675](https://github.com/Alireza29675)

See also the list of [contributors](https://github.com/Alireza29675/Me/contributors) who participated in this project.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details
