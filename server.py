import request
import http.server
import socketserver
from flask import Flask, request,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
PORT = 80
Handler = http.server.SimpleHTTPRequestHandler
people1=[{'store':'Store 1','count':'0'}]
people2=[{'store':'Store 2','count':'0'}]

@app.route('/', methods=['GET','POST'])
def result():
    data = request.get_json()
    print(data)
    if request.method == 'GET':
        return "Real-Time Indoor Crowd Monitoring System Server"
    if request.method == 'POST':
        if data['store']=='Store 1':
            people1.append({'store':data['store'],'count':data['count']})
        else:
            people2.append({'store':data['store'],'count':data['count']})
        #people.append({'store':data['store'],'count':data['count']})
        return f"<h3>{data['store']}{data['count']}</h3>"
@app.route('/<data>', methods=['GET'])
def returnresult(data):
    ret = [people1[len(people1)-1],people2[len(people2)-1]]
    #print(people[len(people)-1])
    return jsonify(ret)
if __name__ == '__main__':
    app.run()
