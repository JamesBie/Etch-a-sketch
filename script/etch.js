function CreateGrid(num){

		
	for (row=0;row < num;row++){
		for (column = 0; column < num; column ++){
		
		$('.container').append('<div class="grid"></div>');
		
		
		}
		
		$('.container').append('<br>');
		
	}
			$('.grid').height(400/num);
			$('.grid').width(400/num);
}

function ClearGrid(){
	$('.grid').remove();
	$('.container').find('br').remove();
}

$(document).ready(function() {


$('#submit-button').on('click',function(){
	var gridnum = $('#rows-textbox').val();
	ClearGrid();
	CreateGrid(gridnum);
});

$('#clear-button').on('click',ClearGrid);

$(".container").on('mouseenter','.grid',function(){
	//var currentcolor = $(this).css(color);
	$(this).addClass('black');
});

});