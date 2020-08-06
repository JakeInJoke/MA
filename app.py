from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/inicio')
def inicio():
    return render_template('inicio.html')


@app.route('/buscar')
def buscar():
    return render_template('busqueda.html')


@app.route('/recientes')
def recientes():
    return render_template('recientes.html')


@app.route('/populares')
def populares():
    return render_template('populares.html')


@app.route('/lista')
def lista():
    return render_template('lista.html')

"""Tipos de busquedas"""

@app.route('/bsqA')
def tipoA():
    return render_template('bsq-a.html')

@app.route('/bsqB')
def tipoB():
    return render_template('bsq-b.html')

if __name__ == '__main__':
    app.run(debug=True)
