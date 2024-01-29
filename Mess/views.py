from django.shortcuts import render
from .models import messMenu, messOrder
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import messOrderSerializer
from django.contrib.auth.decorators import login_required
from Login.models import Profile
# Create your views here.
@login_required
def mess_view(request,*args,**kwargs):
    element=messMenu.objects.get(id=1)
    context={'BDMR':'50',
    'Extras_1':element.extras_1,
    'Extras_2':element.extras_2,
    'Extras_3':element.extras_3,
    'Extras_4':element.extras_4,
    'Extras_5':element.extras_5,
    'Extras_6':element.extras_6,
    'price_1':element.price_1,
    'price_2':element.price_2,
    'price_3':element.price_3,
    'price_4':element.price_4,
    'price_5':element.price_5,
    'price_6':element.price_6,
    }
    return render(request,"mess.html",context)

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List' : '/task-list/'
    }
    return Response(api_urls)

@api_view(['GET'])
def orderlist(request):
    orders = messOrder.objects.all()
    serializer = messOrderSerializer(orders, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def orderDetail(request,pk):
    orders = messOrder.objects.get(id=pk)
    serializer = messOrderSerializer(orders, many=False)
    return Response(serializer.data) 

@api_view(['POST'])
def orderCreate(request):
    serializer = messOrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        obj = Profile.objects.get(roll_no=serializer.data['rollno'])
        obj.expense_current = obj.expense_current+serializer.data['total']
        obj.expense_total = obj.expense_total+serializer.data['total']
        print(obj.expense_current)
        obj.save()
        #object.expense_total = object.expense_total+serializer.data['total']
        return Response(serializer.data) 
    else:
        return Response("ankurs mom")
    

@api_view(['DELETE'])
def orderDelete(request,pk):
    order = messOrder.objects.get(id=pk)
    order.delete()
    return Response('mom')

def manager_view(request,*args,**kwargs):
    return render(request,'mess_manager.html')


# def confirm_view(request):
#     from django.http import JsonResponse
#     if request.method=='POST' and request.is_ajax():
#         try:
#            request.user.messOrder.price_1=80

            
   
#         except messOrder.DoesNotExist:
#             return JsonResponse({'status':'Fail'})

#     else:
#         return JsonResponse({'status':'Fail'})
    
    

