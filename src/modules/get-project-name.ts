import inquirer from 'inquirer'
import validate from 'validate-npm-package-name'
import { InputQuestion } from 'inquirer'

export default async function getProjectName() {
  const projectNameQuestion: InputQuestion = {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) =>
      validate(input).validForNewPackages ||
      'Project name must be valid npm package name'
  }

  const answers = await inquirer.prompt<{ projectName: string }>([
    projectNameQuestion
  ])

  return answers.projectName
}
