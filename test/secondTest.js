
const {Builder,By,Key} = require('selenium-webdriver'); // selenium web driver
var should = require('chai').should(); // chai assertion package - should style ( if you want to use expect style just dont add .should )

// describe block
describe("add second todo test",function(){  // Test Suite

    /*
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    }) */

    // it block
    it("successfully adds a second todo to application", async function(){  // Test

        // launch the browser 
        let driver = await new Builder().forBrowser("chrome").build();

        // navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        // add a todo
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Javascript',Key.RETURN);

        /** assertion to check if the text "Learn Selenium" was added **/

        // find the last item on the list and retrieve it // retrieves the last item added to the list 
        let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
            return value
        })   
        await new Promise(r => setTimeout(r, 2000)); // similar to sleep 
        
        // assert using chai should  ( should uses the value that you want to validate )
        todoText.should.equal('Learn Javascript');

        // close the browser
        await driver.quit();
        
    });

    // fail test
    it("fail test", async function(){  // Test

        // launch the browser 
        let driver = await new Builder().forBrowser("chrome").build();

        // navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        // add a todo
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Javascript',Key.RETURN);

        /** assertion to check if the text "Learn Selenium" was added **/

        // find the last item on the list and retrieve it // retrieves the last item added to the list 
        let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
            return value
        })   
        await new Promise(r => setTimeout(r, 2000)); // similar to sleep 
        
        // assert using chai should  ( should uses the value that you want to validate )
        todoText.should.equal('Do not Learn Javascript');

        // close the browser
        await driver.quit();
        
    });
});


