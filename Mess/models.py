from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class messMenu(models.Model) :
    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)   
    extras_1=models.CharField(null=True,max_length=35)
    price_1=models.IntegerField(null=True)
    extras_2=models.CharField(null=True,max_length=35)
    price_2=models.IntegerField(null=True)
    extras_3=models.CharField(null=True,max_length=35)
    price_3=models.IntegerField(null=True)
    extras_4=models.CharField(null=True,max_length=35)
    price_4=models.IntegerField(null=True)
    extras_5=models.CharField(null=True,max_length=35)
    price_5=models.IntegerField(null=True)
    extras_6=models.CharField(null=True,max_length=35)
    price_6=models.IntegerField(null=True)
    

class messOrder(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)
    rollno=models.IntegerField(blank=True)
    
    orderedDate=models.DateTimeField(null=True)
    item_1=models.TextField(null=True,blank=True)
    quantity_1=models.IntegerField(null=True,default=0,blank=True)
    price_1=models.IntegerField(null=True,default=0,blank=True)
    item_2=models.TextField(null=True,blank=True)
    quantity_2=models.IntegerField(null=True,default=0,blank=True)
    price_2=models.IntegerField(null=True,default=0,blank=True)
    item_3=models.TextField(null=True,blank=True)
    quantity_3=models.IntegerField(null=True,default=0,blank=True)
    price_3=models.IntegerField(null=True,default=0,blank=True)
    item_4=models.TextField(null=True,blank=True)
    quantity_4=models.IntegerField(null=True,default=0,blank=True)
    price_4=models.IntegerField(null=True,default=0,blank=True)
    item_5=models.TextField(null=True,blank=True)
    quantity_5=models.IntegerField(null=True,default=0,blank=True)
    price_5=models.IntegerField(null=True,default=0,blank=True)
    item_6=models.TextField(null=True,blank=True)
    quantity_6=models.IntegerField(null=True,default=0,blank=True)
    price_6=models.IntegerField(null=True,default=0,blank=True)
    total = models.IntegerField(null=True,default=0,blank=True)
