var assert = chai.assert;

suite('INI', function() {
  test('Prueba de lexer.', function() {
    var str_input = "; Comentario";
	var tokens_in = JSON.stringify([ {type: "comments", match: ["; Comentario"," Comentario"] }]); 
	var tokens_out = lexer(str_input);
	
	assert.deepEqual(tokens_in, JSON.stringify(tokens_out));
  });

  test('Prueba de lexer: Entrada erronea', function() {
    var str_input = "error";
	var tokens_in = JSON.stringify([ {type: "error", match: ["error","r"] }]); 
	var tokens_out = lexer(str_input);
	
	assert.deepEqual(tokens_in, JSON.stringify(tokens_out));
  });

  test('Probando tokensToString', function() {
	var str_input = "[owner]\r\n";
	var tokens_out = lexer(str_input);
	var prett = tokensToString(tokens_out);
	assert.equal(prett, "<ol class=\"ol_output\">  <li class = \"header\"> <span> {\n  \"type\": \"header\",\n  \"match\": [\n    \"[owner]\",\n    \"owner\"\n  ]\n} </span></li>  <li class = \"blanks\"> <span> {\n  \"type\": \"blanks\",\n  \"match\": [\n    \"\\r\\n\"\n  ]\n} </span></li>  </ol>\n");
  });

  test('tokensToString con entrada erronea', function() {
    var str_input = "error";
	var tokens_out = lexer(str_input);
	var prett = tokensToString(tokens_out);
	assert.equal(prett, "<ol class=\"ol_output\">  <li class = \"error\"> <span> {\n  \"type\": \"error\",\n  \"match\": [\n    \"error\",\n    \"r\"\n  ]\n} </span></li>  </ol>\n");
  });

  test('Probando localstorage', function() {
    if(window.localStorage){
	  localStorage.finaloutput = "test";
	  assert.equal(localStorage.finaloutput, "test");
	}
  });

});