from django.shortcuts import render
from rest_framework import viewsets
from apps.business.serializer import PersonaSerializer, TipoPersonaSerializer
from apps.business.models import Persona, TipoPersona

# Create your views here.
class PersonaViews(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class TipoPersonaViews(viewsets.ModelViewSet):
    serializer_class = TipoPersonaSerializer
    queryset = TipoPersona.objects.all()