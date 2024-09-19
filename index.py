from utils.initialize_web_driver import initialize_web_driver
from utils.webdriver_install import install_chromedriver
from data_acquistion.get_podcast_data import acquire_podcast_data
from dotenv import load_dotenv
from data_acquistion.get_award_data import get_award_data
def main():
    # load_dotenv()
    # install_chromedriver()
    # driver = initialize_web_driver()
    # acquire_podcast_data(driver)
    # driver.quit()
    get_award_data()

if __name__ == "__main__":
    main()