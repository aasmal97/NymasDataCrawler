import csv


def dicts_to_csv(dict_list, csv_filename):
    if not dict_list:
        return

    keys = dict_list[0].keys()
    with open(csv_filename, 'w', newline='') as output_file:
        dict_writer = csv.DictWriter(output_file, fieldnames=keys)
        dict_writer.writeheader()
        dict_writer.writerows(dict_list)
