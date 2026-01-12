from django.urls import path

from skill import views


app_name = 'skill'
urlpatterns = [
    path('', views.home, name='home'),
    path('update/<id>', views.update_skills, name='update_skills'),
    path('save_update/', views.save_update, name='save_update'),
]