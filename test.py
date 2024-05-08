import csv

from sklearn.svm import SVC
from sklearn.linear_model import Perceptron
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = Perceptron()

with open("data.csv") as f:
    reader = csv.reader(f)
    next(reader)

    data = []
    for row in reader:
        data.append({
            "evidence": [float(cell) for cell in row[1:]],
            "problem": row[0]
        })

training = data

X_training = [row["evidence"] for row in training]
y_training = [row["problem"] for row in training]
model.fit(X_training, y_training)

@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.data.decode('utf-8')
    numbers = [int(num) for num in data.split(',')]
    
    arr = [[], []]
        

    arr = [numbers, numbers]
    prediction = model.predict(arr)
    obj = {'ans': str(prediction)}
    return obj

if __name__ == '__main__':
    app.run(debug=True)

