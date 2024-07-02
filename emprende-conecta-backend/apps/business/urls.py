from rest_framework import routers
from apps.business import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'persona', views.PersonaViews, 'persona')
router.register(r'tipo', views.TipoPersonaViews, 'tipo')

urlpatterns = [
    path('persona/', include(router.urls))
]