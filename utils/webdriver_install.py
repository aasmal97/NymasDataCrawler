import os
import requests
import zipfile
import shutil
import sys
import platform
import subprocess
import re


def split_ip(ip):
    return re.split(r'(\d+\.\d+\.\d+)\.', ip)[1]

def get_chrome_driver_version(driver_info: str) -> str | None:
    match = re.search(r'ChromeDriver\s+([\d.]+)', driver_info)
    if match:
        return match.group(1)
    return None 

def get_chrome_version():
    try:
        # Run the command to get Chrome version
        output = subprocess.check_output(
            r'reg query "HKEY_CURRENT_USER\Software\Google\Chrome\BLBeacon" /v version',
            shell=True,
            stderr=subprocess.STDOUT,
            text=True
        )
        # Extract the version number using regex
        version = re.search(r'version\s+REG_SZ\s+([\d.]+)', output).group(1)
        return version
    except Exception as e:
        return str(e)


def get_chromedriver_version(chrome_version):
    url = f"https://googlechromelabs.github.io/chrome-for-testing/LATEST_RELEASE_{
        split_ip(chrome_version)}"
    response = requests.get(url)
    return response.text.strip()


def download_chromedriver(version):
    os_name = platform.system().lower()
    os_ext = "win32"
    if os_name == 'windows':
        os_ext = "win32"
        file_name = f"chromedriver-win32.zip"
    elif os_name == 'darwin':
        os_ext = "max-arm64"
        file_name = f"chromedriver-mac64.zip"
    else:
        os_ext = "linux64"
        file_name = f"chromedriver-linux64.zip"
    url = f"https://storage.googleapis.com/chrome-for-testing-public/{
        version}/{os_ext}/{file_name}"
    response = requests.get(url, stream=True)
    with open(file_name, 'wb') as file:
        for chunk in response.iter_content(chunk_size=128):
            file.write(chunk)
    return file_name


def extract_chromedriver(file_name):
    with zipfile.ZipFile(file_name, 'r') as zip_ref:
        zip_ref.extractall(".")
    os.remove(file_name)


def force_rename(src: str, dst: str):
    try:
        if os.path.exists(dst):
            shutil.rmtree(dst)  # Remove the destination file if it exists
        os.rename(src, dst)
    except Exception as e:
        print(f"Error: {e}")

def check_if_current_driver_version_is_installed(ver: str):
    try:
        # Run the command to get Chrome version
        output = subprocess.run(
            ['./chromedriver/chromedriver.exe', '--v'],
            capture_output=True,
            text=True,
            cwd="."
        )
        curr_ver = get_chrome_driver_version(output.stdout)
        if curr_ver == ver:
            return True
    except Exception as e:
        print(str(e))
        return False 
def install_chromedriver():
    chrome_version = get_chrome_version()
    if not chrome_version:
        print("Could not determine the latest Chrome version.")
        sys.exit(1)

    chromedriver_version = get_chromedriver_version(chrome_version)
    if check_if_current_driver_version_is_installed(chromedriver_version): 
        return print("Current driver version is already installed")
    file_name = download_chromedriver(chromedriver_version)
    extract_chromedriver(file_name)
    new_file_name = file_name.split(".zip")[0]
    chromedriver_path = os.path.abspath(f"{new_file_name}")
    new_chromedriver_path = os.path.abspath("chromedriver")
    force_rename(chromedriver_path, new_chromedriver_path)
    print(f"Chromedriver installed at: {chromedriver_path}")

