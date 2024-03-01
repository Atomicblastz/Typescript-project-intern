# How do I install and set up my Typescript project and unit testing codes 🧑‍💻

🖥️ **Step 1: Initialize a TypeScript Project** 🖥️
- Create a new directory for my project: By creating my new folder and name it, then cd to my directory in my VScode
- Initialized my Typescript project by implementing **"npm init -y"** command

🧗 **Step 2: Install TypeScript and Jest** 🧗
- Install all necessary dependencies:
  Typescript by running **"npm install typescript --save-dev"** command and install **"npx tsc --init"** command to install tsconfig.json
- Running **"npm install jest ts-jest @types/jest --save-dev"** command to install Jest as my unit tester platform and Typscript Jest types

😴 **Step 3: Create additional folders to add new files** 😴
- Create two new folders: one is src(source) folder and another one called "test"
- Add new file named **"merge.ts"** as my main source code file into src folder and **"merge.test.ts"** file as my unit tester file into test folder
- ***Start Writing codes in both files*** 👈 🌟

:1st_place_medal: **Step 4: Update Typescript configuration and package.json files** :1st_place_medal:
1. Go to tsconfig.json and add **"include": [src/*.ts, tests/**/*.ts] at the bottom of the file**
2. Go to package.json and modified under the ***"scripts"*** section at the ***"tests"*** by replacing the default setting into jest

**(But in my case, I ran into some serious issues that the heap memory was leaking or exceeding while testing which caused me unable to implement/execute any large amount of data and see any test result.
Therefore, I personally changed from jest into **"node --max-old-space-size=4096 ./node_modules/jest/bin/jest.js"** in order to expand my node memory to be at maximum size which is 4096 to solve the problem)

3. Modified the package.json by adding **"jest": {"preset": "ts-jest", "testEnvironment": "node"}**

💪 **Step 5: Execute the codes and debugging** 💪
- Fix all the major bugs or errors but still leave a few minor bugs in which I couldn't solve after had tried for a long time

🏆 **Step 6: Add my project and commit it inside a GitHub repository** 🏆

***It is all done!*** 😄

Thank you for your consideration ♥️

