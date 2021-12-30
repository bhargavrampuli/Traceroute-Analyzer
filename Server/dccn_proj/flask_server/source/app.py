import json

from flask import Flask, jsonify, render_template

app = Flask(__name__)


def LastNlines(fname, N):
    # opening file using with() method
    # so that file get closed
    # after completing work
    try:
        with open(fname) as file:
            # loop to read iterate
            # last n lines and print it
            return file.readlines()[-N:]
    except Exception as e:
        print(str(e))
    return []


def json_load(json_count):
    result_json = {}
    LastNlinesnow=LastNlines("traceroute_output.json", json_count)
    for i in range(len(LastNlinesnow)):
        result_json[str(i+1)] = json.loads(LastNlinesnow[i])
        temp_counter=1
        for j in result_json[str(i + 1)]['array_google']:
            j['rtt'] = float(j['rtt'].split()[0])
            j['']
        for k in result_json[str(i + 1)]['array_iu']:
            k['rtt'] = float(k['rtt'].split()[0])

    return result_json


@app.route("/pastfive", methods=['GET'])
def pastfive():
    result_json = json_load(5)
    return jsonify(result_json)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port='80',debug=True)
