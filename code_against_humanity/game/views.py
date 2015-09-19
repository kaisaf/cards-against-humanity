from django.shortcuts import render
from django.views.generic import View
from .models import WhiteCard, BlackCard
from random import randint
from django.http import JsonResponse

# Create your views here.
class HomeView(View):
    def get(self, request):
        return render(request, "game/index.html")

class WhiteCardView(View):
    def get(self, request):
        number_of_cards = WhiteCard.objects.count()
        cards_list = []
        for i in range(0, 5):
            random_card_id = randint(1, number_of_cards)
            white_card = WhiteCard.objects.get(id=random_card_id)
            cards_list.append(white_card.text)
        return JsonResponse({"cards": cards_list})

class BlackCardView(View):
    def get(self, request):
        number_of_cards = BlackCard.objects.count()
        random_card_id = randint(1, number_of_cards)
        black_card = BlackCard.objects.get(id=random_card_id)
        return JsonResponse({"card": black_card.text})
