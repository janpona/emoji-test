(function($){
  
  $(document).ready(function(){
    
    var group_keys = [
      'language', 'people', 'logic', 'position', 'distinction', 'life', 'grammar', 'boundary', 'likes', 'interacting', 'color', 'presence', 'perception', 'biology', 'story', 'numbers', 'matter', 'activity', 'parts', 'artifacts', 'sky', 'traits', 'forms', 'space', 'society', 'pronouns', 'relationships'
    ];
    
    var groups = {
      'language' : ['a', 'mu', 'nimi', 'toki'],
      'likes' : ['ike', 'yaki', 'pona', 'suwi'],
      'pronouns' : ['mi', 'ni', 'ona', 'sina'],
      'grammar' : ['e', 'la', 'li', 'o', 'pi'],
    	'people' : ['akesi', 'jan', 'kala', 'pipi', 'soweli', 'waso'],
    	'logic' : ['ala', 'ali', 'anu', 'en', 'seme'],
    	'numbers' : ['wan', 'tu', 'mute', 'nanpa', 'taso', 'kin'],
    	'story' : ['ken', 'sona', 'wile'],
    	'space' : ['lon', 'ma', 'tan', 'tawa'],
    	'society' : ['mani', 'nasin', 'tomo', 'esun', 'pan'],
    	'life' : ['awen', 'kama', 'moli', 'pini'],
    	'relationships' : ['olin', 'pakala', 'pana', 'utala'],
    	'activity' : ['lape', 'moku', 'musi', 'pali', 'unpa'],
    	'perception' : ['kalama', 'kute', 'lukin', 'pilin', 'sijelo'],
    	'interacting' : ['ilo', 'kepeken', 'lupa', 'open', 'alasa'],
    	'traits' : ['lili', 'nasa', 'suli', 'wawa'],
    	'sky' : ['lete', 'mun', 'seli', 'suno', 'tenpo'],
    	'presence' : ['jo', 'poka', 'weka', 'namako'],
    	'biology' : ['kasi', 'kili', 'mama', 'meli', 'mije'],
    	'matter' : ['kiwen', 'ko', 'kon', 'telo'],
    	'parts' : ['lawa', 'luka', 'nena', 'noka', 'oko', 'uta'],
    	'artifacts' : ['len', 'lipu', 'poki', 'sitelen'],
    	'position' : ['anpa', 'monsi', 'sewi', 'sinpin'],
    	'distinction' : ['ante', 'kulupu', 'sama', 'sin', 'kipisi'],
    	'color' : ['jelo', 'kule', 'laso', 'loje', 'pimeja', 'walo'],
    	'boundary' : ['ijo', 'insa', 'selo', 'supa'],
    	'forms' : ['linja', 'palisa', 'sike']
    }
    
    for (var i = 0; i < group_keys.length; ++i) {
      console.log(group_keys[i]);
    }
    console.log("Done.");
  });

})(jQuery);
