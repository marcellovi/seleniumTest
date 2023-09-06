// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')



describe('Click Links', function() {
  
  let driver
  let vars
  let elements
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()

    //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })


  it('Click Links', async function() { 
  //await driver.manage().setTimeouts( { implicit: 15000 } );


    await driver.get("http://abm-test.goregstr.com/login")
    //await driver.manage().window().setRect({ width: 1559, height: 769 }) remove
    driver.manage().window().maximize();

    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("esilvas@gobrangus.com")
    await driver.findElement(By.name("password")).sendKeys("qNFh$Vv6SC_/$xk")
    await driver.findElement(By.css(".btn-block")).click()

    //await new Promise(r => setTimeout(r, 5000));
    {
      elements = await driver.findElements(By.css(".dashboard-welcome-title"))
      assert(elements.length)
      console.log('dashboad title')
    }    

    await driver.findElement(By.xpath("//a[@id='toggle-sidebar']")).click()
      //await new Promise(r => setTimeout(r, 2000));
    // animals menu
    driver.wait(until.elementLocated(By.linkText("Animales"))).click();
    driver.wait(until.elementLocated(By.linkText("Aprobación"))).click();
    //await new Promise(r => setTimeout(r, 2000));
    {
      //elements = await driver.findElements(By.css(".approval-table-container"))
      elements = driver.wait(until.elementLocated(By.css(".approval-table-container")))
      assert(elements.length)
      console.log("animals title")
    }

    // invoice menu
    driver.wait(until.elementLocated(By.linkText("Facturación"))).click();
    driver.wait(until.elementLocated(By.css("#invoices-nav-item > span"))).click();
    await new Promise(r => setTimeout(r, 5000));
    {
      elements = await driver.findElements(By.css("//h4[contains(.,'Facturas')]"))
      assert(elements.length)
      console.log("invoice title")
    }

    //await driver.findElement(By.css("#invoices-nav-item > span")).click()
    

    // menu
    await driver.findElement(By.linkText("Cría")).click()

    await driver.findElement(By.id("nba-nav-item")).click()

    await driver.findElement(By.linkText("Membership ABM")).click()

    await driver.findElement(By.id("create-a-member-nav-item")).click()

    await driver.findElement(By.css(".account")).click()

    await driver.findElement(By.css(".fa-sign-out-alt")).click()

  /*
    const waitFind = (locator) => {
        return driver.findElement(async () => {
            await driver.wait(until.elementLocated(locator));
            return driver.findElement(locator);
        });
    }

//const capabilities = await driver.getCapabilities();
//capabilities['map_'].set('timeouts', { implicit: 15000 , pageLoad: 5000 , script: 15000  });

    //console.log(await driver.getCapabilities());

    

    await driver.findElement(By.xpath("//a[@id='toggle-sidebar']")).click()

    //await new Promise(r => setTimeout(r, 5000));
    //let eleSelected = driver.findElement(By.linkText("Animales")).isDisplayed();
    //console.log("Result : ")
   // console.log(eleSelected);
    
  
    //if(eleSelected ){
    //  console.log("Found")
    //}else{
    //  console.log("Not Found")
   // }

   
    console.log("waitFind")
    await waitFind(By.linkText("AnimalesEWEWEW")).click()
    await new Promise(r => setTimeout(r, 5000));

    //driver.wait(until.elementLocated(By.linkText("Animales"))).click();
    var elm = driver.wait(until.elementLocated(By.linkText("Animales")))
    console.log("wait until")
    console.log(elm)
   // elm.click();
    await new Promise(r => setTimeout(r, 2000));

    //var elm1 = driver.wait(until.elementLocated(By.linkText("Animales")))
    var elm1 = driver.wait(until.elementIsVisible(By.linkText("Animales")))
    console.log("elementIsVisible")
    console.log(elm1)
    elm1.click();
    await new Promise(r => setTimeout(r, 2000));

    var elm2 = driver.wait(function () {
      return driver.isElementPresent(By.linkText("Animales"));
    }, 2000);
    console.log("isElementPresent")
    console.log(elm2)
    //elm2.click();

    await new Promise(r => setTimeout(r, 5000));
    //driver.wait(until.elementLocated(By.linkText("Facturación"))).click();
    //driver.wait(until.elementLocated(By.css("#invoices-nav-item > span"))).click();
    //await new Promise(r => setTimeout(r, 2000));
    //var query = driver.wait(until.elementLocated(By.linkText("Animales")))
   // console.log('Result : ')
   // console.log(query)
   // console.log('ID result : ')
   // console.log(query.id_)
  //  query.click();
  //  await new Promise(r => setTimeout(r, 5000));
  //  driver.wait(until.elementLocated(By.linkText("Críadorrrrr"))).click();
  //  await new Promise(r => setTimeout(r, 2000));
  //  driver.wait(until.elementLocated(By.id("nba-nav-item"))).click();
  //  driver.wait(until.elementLocated(By.linkText("Membership ABM"))).click();
  //  driver.wait(until.elementLocated(By.id("create-a-member-nav-item"))).click();
  //  driver.wait(until.elementLocated(By.css(".account"))).click();

    //var query = driver.wait(until.elementLocated(By.linkText("Animales")));
    //query.click();
    console.log('worked');
   

    await driver.findElement(By.xpath("//a[@id='toggle-sidebar']")).click()
    await driver.findElement(By.linkText("Animales")).click()
    await driver.findElement(By.linkText("Facturación")).click()
    await driver.findElement(By.css("#invoices-nav-item > span")).click()
    await driver.findElement(By.linkText("Cría")).click()
    await driver.findElement(By.id("nba-nav-item")).click()
    await driver.findElement(By.linkText("Membership ABM")).click()
    await driver.findElement(By.id("create-a-member-nav-item")).click()
    await driver.findElement(By.css(".account")).click() */
    //await driver.findElement(By.css(".fa-sign-out-alt")).click()

  })
})
