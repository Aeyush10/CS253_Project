from click import password_option
from django.db import models
from django.contrib.auth.models import User
class Profile(models.Model) :
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True)
    login = False
    username = models.CharField(max_length=30,null=True)
    first_name = models.CharField(max_length=100,null=True)
    last_name = models.CharField(max_length=100,null=True)
    password = models.CharField(max_length=20,null=True)
    email = models.EmailField(max_length=254,null=True)
    mobile_no = models.BigIntegerField(null=True)
    roll_no=models.IntegerField(null=True)
    room_no=models.CharField(max_length=4,null=True)
    hall_no=models.IntegerField(null=True)
    is_student = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_prof = models.BooleanField(default=False)
    expense_current = models.IntegerField(default=0)
    expense_last_month = models.IntegerField(default=0)
    expense_total = models.IntegerField(default=0)
    def __str__(self):
        return self.username
    # class Meta:
    #     managed = False
    
    
