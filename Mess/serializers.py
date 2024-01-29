from dataclasses import fields
import imp
from rest_framework import serializers
from .models import messOrder

class messOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model  = messOrder
        fields = '__all__'
        