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
			// the default show the placeholder for the user easier reference
			default: function () {
				return 'foo@example.com';
			},
			// the validator is applied to avoid the user enter a wrong email format
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
	console.log(answers.license);
	const licenseBadges = [];
	answers.license.forEach(function (license) {
		const licenseNoSpace = license.replace(/\s+/g, '');
		licenseBadges.push(
			`![License: ${license}](https://img.shields.io/badge/License-${licenseNoSpace}-brightgreen.svg)`
		);
	});
	console.log(licenseBadges);
	let licenseResult = '';
	licenseResult = licenseBadges.join(' ');
	console.log(licenseResult);

	return `
# Title
${answers.title}

# Description
${answers.description}

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
${answers.installation}

# Usage
${answers.usage}

# License
${licenseResult}

# Contributing
${answers.contributing}

# Tests
${answers.test}

# Questions
Should you have any further questions, please feel free to reach me from the following channel:  
GitHub: [${answers.github}](https://github.com/${answers.github})  
Email: ${answers.email}

`;
}

async function init() {
	try {
		const answers = await promptUser();

		const readMe = generateReadMe(answers);

		await writeFileAsync('READMEResult.md', readMe);

		console.log('Successfully wrote to READMEResult.md');
	} catch (err) {
		console.log(err);
	}
}

init();
