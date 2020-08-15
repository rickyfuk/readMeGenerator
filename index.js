// load the inquirer modual
const inquirer = require('inquirer');
// load the fs modual
const fs = require('fs');
// load the util modual
const util = require('util');
// add the writefileAsync function to write the file after the previous action completed
const writeFileAsync = util.promisify(fs.writeFile);

// enter the question and get the response from the user
function promptUser() {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Please enter the TITLE of your project:',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please enter the DESCRIPTION of your project:',
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Please enter the INSTALLATION INSTRUCTION:',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Please enter the USAGE INFORMATION:',
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'Please enter the CONTRIBUTION GUIDELINES:',
		},
		{
			type: 'input',
			name: 'test',
			message: 'Please enter the TEST INSTRUCTIONS:',
		},
		{
			type: 'input',
			name: 'test',
			message: 'Please enter the TEST INSTRUCTIONS:',
		},
		{
			type: 'checkbox',
			name: 'license',
			message:
				'Please choose the LICENSE(S) for your project from the list below:',
			choices: ['MIT', 'GPLv3', 'Creative Commons Licenses'],
		},
		{
			type: 'input',
			name: 'github',
			message: 'Please enter the yor GITHUB USER NAME for your contact:',
		},
		{
			type: 'input',
			name: 'email',
			message: 'Please enter the yor EMAIL for your contact:',
			default: function () {
				return 'foo@example.com';
			},
			validate: function (value) {
				var pass = value.match(
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
				);
				if (pass) {
					return true;
				}

				return 'Please enter a valid email';
			},
		},
	]);
}

function generateReadMe(answers) {
	return `
# Title
${answers.title}

# Description

# Table of contents

- [Title](#title)
- [Description](#description)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation

# Usage

# License

# Contributing

# Tests

# Questions

`;
}

async function init() {
	console.log('hi');
	try {
		const answers = await promptUser();

		const readMe = generateReadMe(answers);

		await writeFileAsync('READMEtest.md', readMe);

		console.log('Successfully wrote to READMEtest.md');
	} catch (err) {
		console.log(err);
	}
}

init();
