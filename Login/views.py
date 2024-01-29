from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import user_passes_test
#from .serializers import ProfileSerializer
# from .models import Profile
#from rest_framework import viewsets
# from django.http import HttpResponseRedirect
# from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

from Login.models import Profile 
# Create your views here.

# def login_view(request,*args,**kwargs):
    # profiles = Profile.objects.all()
    # # for pro in profiles:
    # #     print (pro.login)
    # #     if pro.login == True:
    # #         return redirect("../profile/")
    # if request.method == "POST" :
    #     user = request.POST.get('User ID')
    #     passw = request.POST.get('password')
    #     #pro = profile.ob
    #     #profiles = Profile.objects.all()
    #     userid=0
    #     for pro in profiles:
    #         userid=userid+1
    #         if pro.username == user and pro.password ==passw:
    #             pro.login = True
                
    #             return redirect("../profile/"+str(userid))
            
    #     #print(username+ " " + password)
    # return render(request,"login.html",{})

    # form = UserCreationForm()
    # return render(request,"login.html",{'form':form})
    
# def profile_view(request,id):
#     user=Profile.objects.get(id=id)
#     context={"username":user.username,"name":user.full_name}
#     return render(request,"profile.html",context)
@login_required
def profile_view(request):
    return render(request,"profile.html")

@login_required
def dashboard_view(request):
    # obj=Profile.objects.get(roll_no=roll)
    # context={
    #     'Total_Price':obj.expense_total,
    #     'Last_Month':obj.expense_last_month,
    #     'Present_Month':obj.expense_current

    # }
    return render(request,"dashboard.html")

@login_required
def qrcode_view(request):
    return render(request,"qr_final.html")

@login_required
def logout_view(request):
    logout(request)
    return render(request,'logout.html')
   