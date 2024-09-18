# Import required modules
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
def initialize_web_driver():
    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    # Set up the Chrome WebDriver
    service = webdriver.ChromeService(executable_path='./chromedriver/chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver