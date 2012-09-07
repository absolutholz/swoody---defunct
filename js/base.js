$( '.list' ).on ( 'click', function ( e ) {
	var $li = $( e.target ).closest( 'li' ),
		$ul = $( e.target ).closest( 'ul' ),
		iOffsetTop = $li.data( 'offset-top' );
		
	e.preventDefault();
	
	if ( !iOffsetTop ) {
		$li.data( 'offset-top', $li.offset().top - $ul.offset().top );
	}
	
	if ( $li.hasClass( 'open' ) ) {
		$li.removeClass( 'open' ).css( 'top', iOffsetTop );
		$ul.removeClass( 'open' );
	} else {
		$li.addClass( 'open' ).css( 'top', iOffsetTop );
		$ul.addClass( 'open' );
	}
});

$( 'header' ).on( 'click', function ( e ) {
	var sHref = $( e.target ).attr( 'href' ),
		$el;
	
	if ( sHref ) {
		switch ( sHref ) {
			case '#user': 
				$el = $( '.user', this );
				break;
			case '#list': 
				break;
			case '#search': 
				$el = $( '.search', this );
				break;
		}
		
		if ( $el && $el.length > 0 ) {
			if ( $el.hasClass( 'open' ) ) {
				$el.removeClass( 'open' );
			} else {
				$el.addClass( 'open' );
			}
		}

	}
	
	return true;
});

$( window ).on( 'change', function ( e ) {
});