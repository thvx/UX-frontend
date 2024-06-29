from django.db import models


# Agregar registros "Emprendedor" y "Vendedor"
class TipoPersona(models.Model):
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'tipo_persona'


class Persona(models.Model):
    dni = models.CharField(max_length=20, null=True)
    ruc = models.CharField(max_length=30, null=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    direccion = models.TextField(blank=True, null=True)
    tipo = models.ForeignKey(TipoPersona, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

    class Meta:
        db_table = 'persona'


class CategoriaEmprendimiento(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'categoria_emprendimiento'


class Emprendimiento(models.Model):
    nombre = models.CharField(max_length=200)
    categoria = models.ForeignKey(CategoriaEmprendimiento, on_delete=models.CASCADE)
    correo = models.EmailField()
    ubicacion = models.TextField()
    presentacion = models.TextField(null=True)
    contacto = models.CharField(max_length=20)
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'emprendimiento'