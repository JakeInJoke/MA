import urllib.request as req
from bs4 import BeautifulSoup,SoupStrainer

diccOfWeb = {
    'PR1':"https://nosolodulces.es/ingrediente/",
    'PR2':"https://www.kiwilimon.com/buscar?q=",
    'RC1':'https://cocinandoentreolivos.com/recetas-a-z',
    'RC2':'http://www.loscerezosenflor.com/p/indice.html',
    'RC3':'https://www.juegodesabores.es/p/indice-alfabetico.html',
}

datos = req.urlopen('https://www.openwebinars.net').read().decode()

for link in BeautifulSoup(datos, "html.parser", parse_only=SoupStrainer('a')):
	print(link.get('href'))