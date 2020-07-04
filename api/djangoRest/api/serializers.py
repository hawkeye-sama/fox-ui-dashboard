from rest_framework_mongoengine import serializers
from .models import Hero, Products , Users
 
class HeroSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Hero
        fields = '__all__'

class ProductsSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class UsersSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Users
        fields = '__all__'

# class TestSerializer(serializers.DocumentSerializer):
#     class Meta:
#         model = Test
#         fields = '__all__'
