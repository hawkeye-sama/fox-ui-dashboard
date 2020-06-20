from rest_framework_mongoengine import serializers
from .models import Hero
 
class HeroSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Hero
        fields = '__all__'

# class TestSerializer(serializers.DocumentSerializer):
#     class Meta:
#         model = Test
#         fields = '__all__'
