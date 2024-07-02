from django.db import models
from django.core.validators import MinLengthValidator, RegexValidator
from django.core.exceptions import ValidationError

# Agregar registros "Emprendedor" y "Vendedor"
class TipoPersona(models.Model):
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'tipo_persona'


class Persona(models.Model):
    dni = models.CharField(max_length=20, null=True, validators=[RegexValidator(regex=r'^\d{8}$', message="El DNI debe tener 8 dígitos")])
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    email_recuperacion = models.EmailField(unique=True)
    password = models.CharField(max_length=128, validators=[MinLengthValidator(8)])
    telefono = models.CharField(max_length=20, blank=True, null=True,validators=[RegexValidator(regex=r'^\d{9}$', message="El teléfono debe tener 9 dígitos")])
    direccion = models.TextField(blank=True, null=True)
    tipo = models.ForeignKey(TipoPersona, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

    class Meta:
        db_table = 'persona'

    def clean(self):
        if self.email == self.email_recuperacion:
            raise ValidationError("El email de recuperación no puede ser igual al email principal.")

class CategoriaEmprendimiento(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'categoria_emprendimiento'


class Emprendimiento(models.Model):
    nombre_emprendimiento = models.CharField(max_length=200)
    categoria = models.ForeignKey(CategoriaEmprendimiento, on_delete=models.CASCADE)
    correo = models.EmailField()
    ubicacion = models.TextField()
    presentacion = models.TextField(null=True)
    contacto = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono_personal = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'emprendimiento'