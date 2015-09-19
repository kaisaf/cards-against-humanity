$(document).ready(function(){

  $('#black_button').on('click', function(){
    $('.black_cards').html("");
    $.ajax({
      type:"GET",
      url: "/blackcards/",
      success: function(card) {
        $('.black_cards').append('<li class="black_card">' + card.card + '</li>');
        $('.black_cards').append('<li id="result">' + card.card + '  <span></span></li>');
      },
      error: function(result) {
        console.log("error");
      }
    })
  })

  $('#white_button').on('click', function(){
    $('.white_cards').html("");
    $.ajax({
      type:"GET",
      url: "/whitecards/",
      success: function(cards) {
        addWhiteCards(cards);
      },
      error: function(card) {
        console.log("error");
      }
    })
  })

  function addWhiteCards(cards){
    $.each(cards, function(i, card){
      for (i=0; i < card.length; i++) {
        $('.white_cards').append('<li class="white_card">' + card[i] + '</li>');
      }

    });
  }

  $('.black_cards').on('click', '.black_card', function() {
    $(this).toggleClass("highlight_border");
  })

  $('.white_cards').on('click', '.white_card', function() {
    if ($(this).siblings().is('.highlight_border')) {
      $(this).siblings().removeClass("highlight_border");
    }
    $(this).toggleClass("highlight_border");
    var best_answer = $(this).get(0);
    var black_card_text = $('.black_card').get(0).innerHTML;
    if (black_card_text.match(/__________/)) {
      best_answer = best_answer.innerHTML;
      best_answer = best_answer.substring(0, best_answer.length - 1)
      black_card_text = black_card_text.replace(/__________/, '<span></span>');
      $('#result').html('<li id="result">' + black_card_text + '</li>');
      $('span').text(best_answer);
    } else {
      $('span').text(best_answer.innerHTML);
    }

  })

})
