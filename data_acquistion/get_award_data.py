import json
from utils.dict_to_csv import dicts_to_csv


def get_award_data():
    # Load JSON file into a dictionary
    data = {}
    with open('./data/award_data.json', 'r') as file:
        data = json.load(file)
    dicts_to_csv(data, 'award_data.csv')
