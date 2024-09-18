# Import required modules
from openai import OpenAI
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.remote.webelement import WebElement
from utils.dict_to_csv import dicts_to_csv
import os
import json


def find_table_with_dimensions(driver: webdriver.Chrome, height: int, width: int):
    try:
        # Wait for the page to finish loading
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, 'body'))
        )
        # Find all tables in the DOM
        tables = driver.find_elements(By.TAG_NAME, 'table')
        for table in tables:
            # Get the height and width of the table
            table_height: str | None | int = table.get_attribute('height')
            table_width: str | None | int = table.get_attribute('width')
            if isinstance(table_height, str):
                table_height = int(table_height)
            else:
                table_height = 0
            if isinstance(table_width, str):
                table_width = int(table_width)
            else:
                table_width = 0
            # Check if the table matches the specified dimensions
            if table_height == height and table_width == width:
                return table

        return None  # Return None if no matching table is found
    except Exception as e:
        print(f"Error: {e}")
        return None


def single_prompt_transform(client: OpenAI, data: dict[str, str]):
    prompt_text = r"Parse and refine the podcast data at the end of this message, by following the JSON structure and template below: \n {'speaker': string, affliation: null | string, 'photoTakenBy': string | Null, 'recordedOn': string, 'duration': string, 'headerTitle': string,'title': string, 'introduction': null | string} \n An example is provided below for further understanding: \n Example Unparsed Data: {'speaker': 'Tami Davis Biddle\nPhoto: U.S. Army War College', 'info': 'NEW\nOn the Crest of Fear:\nThe V-2s,\nthe Battle of the Bulge, and the Closing Months of the Second World War\n \nrecorded\nMarch 1, 2019\n1 hour and 47 mins\n\nclick here to listen'} \n Example Solution: \n {'speaker': 'Tami Davis Biddle', affliation: null, 'photoTakenBy': 'U.S. Army War College', 'recordedOn': 'March 1, 2019', 'duration': '1 hour and 47 mins', 'headerTitle': 'On the Crest of Fear:','title': 'The V-2s, the Battle of the Bulge, and the Closing Months of the Second World War', 'introduction': null } \n Return the output in JSON format \n Unparsed Data:"
    new_prompt_text = f'{prompt_text} \n{json.dumps(data)}'
    response = client.chat.completions.create(model="gpt-4o-mini", messages=[
        {
            "role": "user",
            "content": new_prompt_text
        }
    ])
    result = response.choices[0].message.content
    new_result = {}
    # in case parsing fails
    try:
        if isinstance(result, str):
            parsed_result = result.strip('`\n').strip('json')
            new_result = json.loads(parsed_result)
    except Exception as e:
        print(e, "Error parsing, please retry")
    return new_result


def prompt_open_ai(data: list[dict[str, str]]):
    client = OpenAI(
        api_key=os.getenv('OPENAI_API_KEY')
    )
    new_data = [single_prompt_transform(client, item) for item in data]
    return new_data


def extract_text_data_from_row(row: WebElement):
    table_columns = row.find_elements(By.XPATH, './td')
    row_info_el = table_columns[1]
    row_speaker_el = table_columns[2]
    speaker = row_speaker_el.text
    info = row_info_el.text
    return {
        'speaker': speaker,
        'info': info
    }


def extract_data_from_rows(table: WebElement):
    rows = table.find_elements(By.XPATH, './tbody/tr')
    # skip first row, since it's just the title
    data = [extract_text_data_from_row(row) for row in rows[1::]]
    return data


def acquire_podcast_data(driver: webdriver.Chrome):
    # Navigate to the specified URL
    driver.get('https://nymas.org/podcasts.html')
    table = find_table_with_dimensions(driver, height=0, width=900)
    # find table
    if table:
        print("Table found:", table)
    else:
        print("No table found with the specified dimensions.")
        return
    data = extract_data_from_rows(table)
    cleaned_data = prompt_open_ai(data)
    # create csv file to import into a database collection
    dicts_to_csv(cleaned_data, 'podcast_data.csv')
