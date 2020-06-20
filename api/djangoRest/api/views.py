from .serializers import HeroSerializer
from .models import Hero

from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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
    queryset = Hero.objects.all()

    @action(detail=False, methods=['post'])
    def post_action(self,request):
        print("hello")
    
        
