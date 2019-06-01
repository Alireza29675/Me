# Me _(My JSON resume with graphical interface)_

**Me** is an application which process a JSON file with a specified schema and will generate a printer-friendly webpage as a result.

![Screenshot of Me](https://user-images.githubusercontent.com/2771377/58752355-b9f6ec80-84c2-11e9-8c51-24880e5278c6.PNG)

## What's the purpose?
- Google Docs, Microsoft Word and other similar applications are designed to support every kinds of layout. Due to this reason sometimes it's hard to manage adding and removing items from pre-created resume.

- JSON files can be used to develop other applications.

- You can keep your JSON file in a repository with a great version control system behind it. It feels great!

## I want to make my own Me repository

1. Make a fork from [this repository](https://github.com/Alireza29675/Me).

2. Clone your fork using following command:

    ```bash
    git clone [YOUR-FORK-URL]
    ```

3. [Install Node.js](https://nodejs.org/en/download/) if you haven't installed it yet.

4. Go to **Me** directory and install dependencies:

    ```bash
    cd ./Me
    npm install
    ```

5. Run **Me** using following command:

    ```bash
    npm start
    ```

6. Find and edit `src/data/resume.json` file. Each time you save the json file your resume will be automatically reloaded. Finally you can print your resume as PDF, and push it to your fork repository so you'll keep it.

7. Have fun by saving your time.