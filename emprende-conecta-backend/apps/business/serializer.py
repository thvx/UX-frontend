from rest_framework import serializers
from apps.business.models import Persona, TipoPersona

class PersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'

    def validate_dni(self, value):
        if len(value) != 8 or not value.isdigit():
            raise serializers.ValidationError("El DNI debe tener exactamente 8 dígitos.")
        return value

    def validate(self, data):
        if data['email'] == data.get('email_recuperacion'):
            raise serializers.ValidationError("El email y el email de recuperación deben ser distintos.")
        if 'telefono' in data and data['telefono'] and (len(data['telefono']) != 9 or not data['telefono'].isdigit()):
            raise serializers.ValidationError("El teléfono debe tener exactamente 9 dígitos.")
        return data

class TipoPersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = TipoPersona
        fields = '__all__'