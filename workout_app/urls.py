from django.contrib import admin
from django.urls import path, include
from home.views import home_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('user_api.urls')),
    path('api/', include('workout.urls')),
    path('', home_view, name='home_view'),
]
