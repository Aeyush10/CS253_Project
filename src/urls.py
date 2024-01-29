"""src URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from unicodedata import name
from django.contrib import admin
from django.urls import path, include
# from Login.views import login_view
from Login.views import profile_view
#from Login.views import dashboard_view
from Mess.views import mess_view
from django.contrib.auth import views as auth_view
from Hall.views import entry_view
from Login.views import dashboard_view
from Login.views import qrcode_view
from Hall.views import exit_view
from Mess.views import manager_view
from Login.views import logout_view
#from Mess.views import confirm_view
urlpatterns = [
    # path('qr',include('qrscan.urls')),
    path('admin/', admin.site.urls),
    path('',auth_view.LoginView.as_view(template_name='login.html'),name='login'),
    path('mess/',mess_view,name="mess_view"),
    path('profile/',profile_view),
    path('api/',include('Mess.urls')),
    path('entry/',entry_view),
    path('dashboard/',dashboard_view,name="dashboard_view"),
    path('qr_code/',qrcode_view,name="qrcode_view"),
    path('exit/',exit_view,name='exit'),
    path('manager/',manager_view,name='manager_view'),
    path('logout/',logout_view,name='logout_view'),
    
    #path('confirm/',confirm_view,name='confirm_view'),
]
