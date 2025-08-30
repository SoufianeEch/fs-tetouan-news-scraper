import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BRAVE_PATH = "/usr/bin/brave-browser"
target = "https://fs.uae.ac.ma/"

def make_driver(headless=True):
  opts = Options()
  opts.binary_location = BRAVE_PATH
  if (headless):
    opts.add_argument("--headless=new")
  opts.add_argument("--disable-gpu")
  opts.add_argument("--no-sandbox")
  return webdriver.Chrome(options=opts)

def fs_tetouane(url):
  # inialise driver
  driver = make_driver(True)
  try:
    # set target
    driver.get(url)
    # wait for webpage to load
    wait = WebDriverWait(driver, 10)
    # wait for a condition to be true
    condition = EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".carousel-inner .item .carousel-caption h3 a"))
    wait.until(condition)
    # collect elements
    links = driver.find_elements(By.CSS_SELECTOR,".carousel-inner .item .carousel-caption h3 a")
    # arrange the result as a object
    items = [{"index":i+1, "title":a.get_attribute("textContent").strip(), "url": a.get_attribute("href")} for i,a in enumerate(links)]
    return items
  finally:
    driver.quit()

if __name__ == "__main__":
  result = json.dumps(fs_tetouane(target))
  print(result)