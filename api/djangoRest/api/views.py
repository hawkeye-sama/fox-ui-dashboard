from .serializers import HeroSerializer, ProductsSerializer
from .models import Hero , Products
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

# class TestViewSet(viewsets.ModelViewSet):
#     lookup_field = '_id'
#     serializer_class = TestSerializer

#     def get_queryset(self):
#         queryset = Test.objects.all()
#         return queryset

# class HeroViewSet(viewsets.ModelViewSet):
#     lookup_field = '_id'
#     serializer_class = HeroSerializer
#     queryset = Hero.objects.all()
#         #return Hero.objects.all()
        
class HeroViewSet(viewsets.ModelViewSet):
    serializer_class = HeroSerializer
    def get_queryset(self):
        print(self.request.data)
        return Hero.objects.all()

class ProductsViewSet(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    def get_queryset(self):
        return Products.objects.all()

class ProfileDetail(viewsets.ModelViewSet):
    serializer_class = HeroSerializer
    queryset = Hero.objects.all()
    
    def create(self, request, *args, **kwargs):
    
        new_dict = dict(**request.data)
        print(new_dict['name'][0])
        moi = new_dict['name'][0] 
        moi = Hero.objects.filter(name=moi)
        moiSerializer = HeroSerializer(moi,many=True)
        return Response(moiSerializer.data)   
