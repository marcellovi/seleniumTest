// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
var should = require('chai').should();

describe('login', function() {
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
  it('login', async function() {
    await driver.get("http://abm-test.goregstr.com/login")
    await driver.manage().window().setRect({ width: 1096, height: 966 })
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("esilvas@gobrangus.com")
    await driver.findElement(By.name("password")).sendKeys("qNFh$Vv6SC_/$xk")
    await driver.findElement(By.css(".btn-block")).click()
    {
      //const elements = await driver.findElements(By.xpath("//span[contains(.,\'Bienvenidos Emilio Silvas\')]"))

      const elements = await driver.findElement(By.xpath("//span[contains(.,\'Bienvenido Emilio Silvas\')]")).getText().then(function(value){
            return value
        }) 

      elements.should.equal('Bienvenido Emilio Silvas');
    }
  })
})
