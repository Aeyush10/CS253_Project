# DigiCampus

## This README contains details of how to use and access the website
## Requirements:
> Python <br>
> Django (django)<br>
> Rest Framework (djangorestframework)<br>
> pyzbar (for generating qr codes) <br>
> SymPy (sympy)<br>
> Crispy Form (django-crispy-forms)<br>
> Click (click)<br>
> WhiteNoise (whitenoise)<br>
These can be installed by using the appropriate pip commands.
## How to use:
> As we could not deploy the website on a domain, we are running it on a local machine. <br>
> Before running the server, we need to configure the settings locally to enable other devices connected to the same WiFi network to access the website. We do this by: <br>
> > Run the 'ipconfig' command in terminal and obtain the IP at the IPv4 Adress for the WiFi Card on your laptop/PC.<br>
> > Note this IP Address, let us suppose it is '172.164.0.111'.<br>
> Open the Backend folder in Terminal and run the command 'python manage.py runserver 172.164.0.111:8000' <br>\
> Replace the IP Address in the qrGen.py program with the new IP Address to generate correct QR Codes for entry/exit in the hall
> You can create an 'admin' user by running the command 'python manage.py createsuperuser' and enter a Username and Password as promted in the terminal.<br>
> You can visit the site '172.164.0.111:8000/admin' and populate the Users and corresponding Profiles by using the username and password of the superuser. This creates the dummy database used as an example for the system.<br>
> Now to use the site you can use '172.164.0.111:8000/login'
