'''hello world com flask'''
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def ola_mundo():
    '''método get para retornar um hello world a partir da raiz da nossa api'''
    json = {"mensagem":"Olá, mundo!"}
    return jsonify(json)

if __name__ == '__main__':
    app.debug = True
    app.run()
