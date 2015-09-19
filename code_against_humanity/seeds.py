import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'code_against_humanity.settings')

import django
django.setup()

from game.models import BlackCard, WhiteCard

def seed():
    white = open('wcards.txt')
    for line in white:
        cards = line.split('<>')
        cards = list(cards)
        print(len(cards))
        for card in cards:
            new_card = WhiteCard(text=card)
            new_card.save()
    black = open('bcards.txt')
    for line in black:
        cards = line.split('<>')
        cards = list(cards)
        for card in cards:
            new_card = BlackCard(text=card)
            new_card.save()



seed()
