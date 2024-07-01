from django.shortcuts import render
from rest_framework import viewsets
from apps.business.serializer import PersonaSerializer
from apps.business.models import Persona

# Create your views here.
class PersonaViews(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()