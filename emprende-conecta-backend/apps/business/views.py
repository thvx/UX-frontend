from django.shortcuts import render
from rest_framework import viewsets
from apps.business.serializer import PersonaSerializer, TipoPersonaSerializer, CategoriaEmprendimientoSerializer, EmprendimientoSerializer
from apps.business.models import Persona, TipoPersona, CategoriaEmprendimiento, Emprendimiento

# Create your views here.
class PersonaViews(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class TipoPersonaViews(viewsets.ModelViewSet):
    serializer_class = TipoPersonaSerializer
    queryset = TipoPersona.objects.all()

class CategoriaEmprendimientoViews(viewsets.ModelViewSet):
    serializer_class = CategoriaEmprendimientoSerializer
    queryset = CategoriaEmprendimiento.objects.all()

class EmprendimientoViews(viewsets.ModelViewSet):
    serializer_class = EmprendimientoSerializer
    queryset = Emprendimiento.objects.all()