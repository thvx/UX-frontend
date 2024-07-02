from rest_framework import serializers
from apps.business.models import Persona, TipoPersona

class PersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("La contraseña debe tener al menos 8 caracteres.")
        return value

    def validate_email_recuperacion(self, value):
        if value == self.initial_data.get('email'):
            raise serializers.ValidationError("El email de recuperación no puede ser igual al email principal.")
        return value

    def validate(self, data):
        if Persona.objects.filter(email=data.get('email_recuperacion')).exists():
            raise serializers.ValidationError("El email de recuperación ya está en uso como correo principal de otro usuario.")
        if Persona.objects.filter(dni=data.get('dni')).exists():
            raise serializers.ValidationError("El DNI ya está en uso por otro usuario.")
        return data

class TipoPersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = TipoPersona
        fields = '__all__'