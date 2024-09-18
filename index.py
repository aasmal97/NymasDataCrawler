from utils.initialize_web_driver import initialize_web_driver
from utils.webdriver_install import install_chromedriver
from data_acquistion.get_podcast_data import acquire_podcast_data

def main():
    install_chromedriver()
    driver = initialize_web_driver()
    acquire_podcast_data(driver)
    driver.quit()

if __name__ == "__main__":
    main()