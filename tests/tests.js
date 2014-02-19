var assert = chai.assert;

suite('INI', function() {
  
    test('Primera prueba', function() {
        var str_input = '; Comentario';
	var tokens_in = [{match: ["; Comentario", "Comentario"], type: "comments"}];
	var tokens_out = lexer(str_input);
	assert.deepEqual(tokens_in, tokens_out);
    });

    test('Entrada erronea', function() {
        var str_input = '[ow\ner]';
	var tokens_out = lexer(str_input);
	assert.match(tokens_out, /'class=error'/);
    });

    test('Probando tokensToString', function() {
	var str_input = '[owner]';
	var tokens_out = lexer(str_input);
	var prett = tokensToString(tokens_out);
	assert.equal(prett, '<ol class="ol_output">  <li class = "comments"> <span> {  "type": "comments",  "match": [    "; Comentario",    " Comentario"  ]} </span></li>  </ol>');
    });

    test('tokensToString con entrada erronea', function() {
        var str_input = '[ow\ner]';
	var tokens_out = lexer(str_input);
        var prett = tokensToString(tokens_out);
	assert.match(tokens_out, /'class=error'/);
    });

    test('Probando localstorage', function() {
	assert.match(window.localstorage, /'initialinput'/);
    });

});