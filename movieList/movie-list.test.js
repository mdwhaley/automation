// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// First we're going to navigate to Google.com
beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

// And after our test has completed, we want to close our browser
afterAll(async () => {
  await driver.quit();
});

test("Add Movie", async () => {
  //create a variable for the input
  let addMovieBar = driver.findElement(By.css("input"));
  await driver.sleep(2000);
  //add a movie called FUNduro
  await addMovieBar.sendKeys("FUNduro\n");
  await driver.sleep(2000);
});

test("Cross Off Movie", async () => {
  //create a variable for the inputed text
  let movieName = driver.findElement(By.xpath("//span[text()='FUNduro']"));
  //cross off movie
  await movieName.click();
  await driver.sleep(2000);
});

test("Delete Movie", async () => {
  //create a variable for the delete button
  let deleteButton = driver.findElement(By.id("FUNduro"));
  //delete movie
  await deleteButton.click();
  await driver.sleep(2000);
});
