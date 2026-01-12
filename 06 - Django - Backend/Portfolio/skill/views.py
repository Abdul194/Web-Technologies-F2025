from django.shortcuts import render

from skill.models import Skills


# Create your views here.

def home(request):
    skills = Skills.objects.all()
    context = {"skills": skills}
    return render(request, "skills/home.html", context)

def update_skills(request, id):
    skill = Skills.objects.get(id=id)
    context = {"skill": skill}
    return render(request, "skills/update.html", context)

def save_update(request):
    if request.method == "POST":
        id = request.POST["id"]
        name = request.POST["name"]
        score = request.POST["score"]

        skill = Skills.objects.get(id=id)
        skill.name = name
        skill.score = score
        skill.save()
        skills = Skills.objects.all
        context = {"skills": skills}
        return render(request, "skills/home.html", context)
