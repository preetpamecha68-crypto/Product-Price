from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    # Add your Gemini API logic here
    # Returning mock data for demonstration
    return jsonify({
        'name': 'PolyCab 1mm Wire',
        'selling_price': 1750
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
