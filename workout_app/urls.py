from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('admin/', admin.site.urls),
    path('api/auth/', include('user_api.urls')),
    path('api/', include('workout.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
]

handler404 = TemplateView.as_view(template_name='index.html')
