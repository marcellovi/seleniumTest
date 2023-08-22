// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Membership Abm', function() {
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
  it('Create Member', async function() {
    await driver.get("http://abm-test.goregstr.com/login")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("esilvas@gobrangus.com")
    await driver.findElement(By.name("password")).sendKeys("qNFh$Vv6SC_/$xk")
    await driver.findElement(By.css(".btn-block")).click()
    await driver.findElement(By.linkText("Membership ABM")).click()
    await driver.findElement(By.id("create-a-member-nav-item")).click()
    
    await new Promise(r => setTimeout(r, 2000)); // similar to sleep 
    await driver.findElement(By.linkText("Membership ABM")).click()
    await driver.findElement(By.id("create-a-member-nav-item")).click()
    await driver.findElement(By.name("name")).sendKeys("Alejandro")
    await driver.findElement(By.name("dba")).sendKeys("DBA")
    {
      const dropdown = await driver.findElement(By.name("member_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Socio']")).click()
    }
    await driver.findElement(By.name("email")).sendKeys("alejandro@gmail.com")
    await driver.findElement(By.name("password")).sendKeys("123456")
    await driver.findElement(By.name("billing_email")).sendKeys("alejandro@gmail.com")
    {
      const dropdown = await driver.findElement(By.name("animal_hold_brand_location_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Caderda Izquierda']")).click()
    }
    {
      const dropdown = await driver.findElement(By.name("animal_private_herd_number_location_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Caderda Izquierda']")).click()
    }
    {
      const dropdown = await driver.findElement(By.name("list_address_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Rancho']")).click()
    }
    await driver.findElement(By.name("line1")).sendKeys("Direccion Direita")
    await driver.findElement(By.name("city")).sendKeys("Mexicano")
    await driver.findElement(By.css("#vs1__combobox .vs__search")).click()
    await driver.findElement(By.id("vs1__option-59")).click()
    await driver.findElement(By.name("postal_code")).sendKeys("11111")
    {
      const dropdown = await driver.findElement(By.name("list_telephone_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Oficina']")).click()
    }
    await driver.findElement(By.name("phone_number")).sendKeys("111")
    await driver.findElement(By.name("extension")).sendKeys("333")
    await driver.findElement(By.name("first_name")).sendKeys("Chaves")
    await driver.findElement(By.name("last_name")).sendKeys("Chavisco")
    await driver.findElement(By.name("title")).sendKeys("Senor")
    await driver.findElement(By.css(".account")).click()
    await driver.findElement(By.linkText("Salir")).click()
    await driver.findElement(By.css(".dropdown-toggle > .fas")).click()
    await driver.findElement(By.linkText("Salir")).click()
  })
})
