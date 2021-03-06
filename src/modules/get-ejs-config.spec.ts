import { TemplateName } from '../types'
import getEjsConfig from './get-ejs-config'
import inquirer from 'inquirer'

jest.mock('inquirer')

describe('get-ejs-config module', () => {
  it('return Nuxt config', async done => {
    const projectName = 'test'
    const sassUtilsCollection = 'test'
    const fixBrowserStyles = 'test'
    const axiosI18nHeader = 'test'
    const plugins = 'test'

    const inquierPropmtMock = (inquirer.prompt as unknown) as jest.Mock

    inquierPropmtMock.mockResolvedValue({
      fixBrowserStyles,
      sassUtilsCollection,
      plugins,
      axiosI18nHeader
    })

    const ejsConfig = await getEjsConfig(projectName, 'nuxt' as TemplateName)

    expect(ejsConfig).toMatchObject({
      projectName,
      nuxtSparingCenter: {
        fixBrowserStyles,
        sassUtilsCollection,
        plugins,
        axiosI18nHeader
      }
    })

    done()
  })

  // TODO
  it('returns Simple config', async done => {
    const ejsConfig = await getEjsConfig(
      'test-project-name',
      'simple' as TemplateName
    )

    expect(ejsConfig).toBe(null)
    done()
  })
})
