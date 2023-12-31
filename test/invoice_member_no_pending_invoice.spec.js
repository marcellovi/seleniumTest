// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('dashboard top search', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('dashboard top search', async function() {
    await driver.get("http://abm-test.goregstr.com/login")
    driver.manage().window().maximize();
    await new Promise(r => setTimeout(r, 2000));

    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("esilvas@gobrangus.com")
    await driver.findElement(By.name("password")).sendKeys("qNFh$Vv6SC_/$xk") // wrong password
    await driver.findElement(By.css(".btn-block")).click()
    await new Promise(r => setTimeout(r, 2000));

    await driver.findElement(By.xpath("//a[@id='toggle-sidebar']")).click()
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.xpath("//li[@id=\'billing-section\']/a")).click()
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.css("#invoices-nav-item > span")).click()
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.id("query")).click()
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.id("query")).sendKeys("452")
    await driver.findElement(By.id("query")).sendKeys(Key.ENTER)
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.id("vs1__option-0")).click()
    await new Promise(r => setTimeout(r, 2000));
    await driver.findElement(By.css(".text-center")).click()
    await new Promise(r => setTimeout(r, 3000));
    {
      //const element = await driver.findElement(By.css(".text-center"))
      //await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    //await new Promise(r => setTimeout(r, 2000));
    {
      const elements = await driver.findElements(By.css(".no-results-text"))
      assert(elements.length)
    }
  })
})
