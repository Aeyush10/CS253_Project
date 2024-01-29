import pyqrcode
url = pyqrcode.create('http://127.0.0.1:8000/exit')
url.png('qrexit.png',scale=4)
