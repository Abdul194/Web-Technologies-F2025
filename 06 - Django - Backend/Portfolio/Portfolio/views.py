from django.http import HttpResponse
from django.shortcuts import render
from skill.models import Skills

def home(request):
    skills = Skills.objects.all()
    context = {"skills": skills}
    return render(request, "index.html", context)


def about(request):
    return render(request, "About.html")

def contact(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            skill_name = request.POST['skill']
            score_level = request.POST['score']

            # print(skill, score)
            Skills.objects.create(name=skill_name, score=score_level)
            # print(username, email, city)

        return render(request, "contact.html")
    else:
        return render(request, "login.html")

