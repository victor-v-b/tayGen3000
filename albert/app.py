from transformers import pipeline
from flask import Flask, render_template, jsonify

model = pipeline('text-generation', model='distilgpt2')

####

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Albert Taylor.html' )

@app.route('/generate_text')
def generate_text():
    prompt = "albert taylor"  # You can customize this prompt
    generated_text = model(prompt, max_length=100, num_return_sequences=1)
    return jsonify(generated_text=generated_text[0]['generated_text'])

if __name__ == '__main__':
    app.run(debug=True)


